import React from "react";

const SkillsLevel = ({ skillsName, percentage }) => {
  return (
    <>
      <div className="mt-3 space-y-2">
        <div className="flex justify-between items-end">
          <p className="text-xl font-bold">{skillsName}</p>
          <p className="text-xl font-bold text-right">{percentage}</p>
        </div>
        <div className="w-full bg-slate-200 h-4 rounded-full">
          <div
            style={{ width: `${percentage}` }}
            className={`h-4 bg-slate-900 rounded-full`}
          ></div>
        </div>
      </div>
    </>
  );
};
 
export default SkillsLevel;
