import "./Job.css";
import PropTypes from "prop-types";

function Job({ data, addToFilterList }) {
  const keyWordsList = [
    data.role,
    data.level,
    ...data.languages,
    ...data.tools,
  ];
  return (
    <div className={data.featured ? "JobContainer featured" : "JobContainer"}>
      <div className="JobContainer-ImgBox">
        <img src={data.logo} alt="" />
      </div>
      <div className="JobContainer-FirstPart">
        <span className="JobContainer-FirstPart-Company">{data.company}</span>
        {data.new && <span className="JobContainer-FirstPart-New">new!</span>}
        {data.featured && (
          <span className="JobContainer-FirstPart-Featured">featured</span>
        )}
        <h2 className="JobContainer-FirstPart-Position">{data.position}</h2>
        <span className="JobContainer-FirstPart-PostedAt">{data.postedAt}</span>
        <span className="JobContainer-FirstPart-Contract">{data.contract}</span>
        <span className="JobContainer-FirstPart-Location">{data.location}</span>
      </div>
      <div className="JobContainer-KeywordsBox">
        {keyWordsList.map((key, id) => (
          <button key={id} onClick={() => addToFilterList(key)}>
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}

Job.propTypes = {
  data: PropTypes.object,
  keyWords: PropTypes.array,
  addToFilterList: PropTypes.func,
};

export default Job;
