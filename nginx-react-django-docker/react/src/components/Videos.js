function Videos({ videoSource }) {
  return (
    <>
      <iframe
        className="m-2"
        width="400"
        height="250"
        src={videoSource}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </>
  );
}

export default Videos;
