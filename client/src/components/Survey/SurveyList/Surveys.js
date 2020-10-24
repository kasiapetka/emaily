import React  from "react";
import Survey from "./Survey";

const Surveys =(props)=>{

    const surveys =  props.surveys?.map((survey, index) => {
        return <Survey
            title={survey.title}
            subject={survey.subject}
            body={survey.body}
            lastResponded={survey.lastResponded}
            dateSend={survey.dateSend}
            repliesCount={survey.repliesCount}
            limit={survey.limit}
            password={survey.password}
            URL={survey.URL}
            key={survey._id}
        />
    });

    return(
        <div className="">
            {surveys}
        </div>
    )
};

export default Surveys;
