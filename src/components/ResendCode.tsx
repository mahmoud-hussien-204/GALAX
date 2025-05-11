import useMutation from "@/hooks/useMutation";

import {apiResentOtp} from "@/services";

import dayjs from "dayjs";

import {CSSProperties, useEffect, useState} from "react";

const getOtpSentAt = () => {
  const otpSentAt = localStorage.getItem("otp-sent-at");
  if (!otpSentAt) return;
  return dayjs(otpSentAt);
};

const otpSentAt = getOtpSentAt();

const getDiffSeconds = otpSentAt ? dayjs().diff(otpSentAt, "second") : 0;

const sentOtpIsValid = otpSentAt && getDiffSeconds < 120;

const remainingSeconds = Math.abs(getDiffSeconds - 60);

const remainingMinutes = Math.ceil(remainingSeconds / 60);

const initialSeconds = 59;

const initialMinutes = 1;

export default function ResendCode({email}: {email: string}) {
  const [isCountDown, setIsCountDown] = useState(sentOtpIsValid);

  const [countdownSec, setCountdownSec] = useState(initialSeconds);

  const [countdownMin, setCountdownMin] = useState(initialMinutes);

  const {mutate, isPending} = useMutation({
    mutationFn: apiResentOtp,
    mutationKey: ["api-resent-otp"],
  });

  const triggerTime = (initSec = initialSeconds, initMin = initialMinutes) => {
    setIsCountDown(true);

    let countValueSec = initSec;

    let countValueMin = initMin;

    setCountdownSec(countValueSec);

    setCountdownMin(countValueMin);

    const interval = setInterval(() => {
      // time is done
      if (countValueSec === 0 && countValueMin === 0) {
        clearInterval(interval);
        setIsCountDown(false);
        setCountdownSec(initialSeconds);
        setCountdownMin(initialMinutes);
        localStorage.removeItem("otp-sent-at");
        return;
      }

      // seconds in progress
      if (countValueSec > 0) {
        countValueSec--;
        setCountdownSec(countValueSec);
        return;
      }

      if (countValueMin > 0) {
        countValueMin--;
        countValueSec = initialSeconds;
        setCountdownSec(countValueSec);
        setCountdownMin(countValueMin);
        return;
      }
    }, 1000);
  };

  const resendOtp = () => {
    mutate(
      {
        email,
      },
      {
        onSuccess: () => {
          localStorage.setItem("otp-sent-at", dayjs().toString());
          triggerTime();
        },
      }
    );
  };

  useEffect(() => {
    if (sentOtpIsValid) {
      triggerTime(remainingSeconds, remainingMinutes);
    } else {
      localStorage.removeItem("otp-sent-at");
    }
  }, []);

  return (
    <div className='absolute bottom-0 end-1rem top-0 text-sm font-medium text-primary'>
      {isCountDown ? (
        <div className='flex h-3rem items-center overflow-hidden'>
          <span className='countdown'>
            <span style={{"--value": countdownMin} as CSSProperties}></span>:
            <span style={{"--value": countdownSec} as CSSProperties}></span>
          </span>
        </div>
      ) : (
        <button
          type='button'
          className='flex h-3rem items-center gap-0.25rem'
          onClick={() => resendOtp()}
          disabled={isCountDown}
        >
          Get Code {isPending && <span className='loading loading-spinner loading-xs'></span>}
        </button>
      )}
    </div>
  );
}
