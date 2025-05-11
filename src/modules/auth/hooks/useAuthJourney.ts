import { useContext } from "react";

import { AuthJourneyContext } from "../providers/AuthJourneyProvider";

const useAuthJourney = () => {
  return useContext(AuthJourneyContext);
};

export default useAuthJourney;
