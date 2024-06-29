const Canvas = () => {
  return (
    <div className="cav-container">
      <div className="cav__wrapper container__default">
        <div className="cav__content">
          <p className="cav__p">안녕하세요</p>
          <p className="cav__bold cav__p">Front-end Developer 이태일입니다.</p>
          <p className="cav__p">항상 탐구하는 개발자가 되고 싶습니다.</p>
        </div>
        <div className="cav__img-container">
          <img
            src="/profile/profile.jpg"
            alt="profile"
            className="cav__photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Canvas;
