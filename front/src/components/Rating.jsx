import starsIcon from "../assets/icons/star.png";

const Stars = (rating) => {
  const content = [];
  for (let i = 0; i <= rating; i++) {
    content.push(<img src={starsIcon} alt="rating" key={"star-" + i} />);
  }

  return content;
};

export default Stars;
