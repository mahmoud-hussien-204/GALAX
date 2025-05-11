import "@/style/glitchText.css";

const GlitchText = ({text}: {text: string}) => {
  return (
    <div className='glitch-wrapper'>
      <div className='glitch' data-glitch={text}>
        {text}
      </div>
    </div>
  );
};

export default GlitchText;
