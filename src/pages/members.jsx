import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { allMembers } from "../API/API";
import Breadcrumbs from "../components/Breadcrumbs/breadcrumbs";
import OtherMembers from "../components/memberComponents/otherMembers";
import UsersCards from "../components/Card/usersCards";
import MemberInfo from "../components/memberComponents/memberInfo";
import MemberSocial from "../components/memberComponents/memberSocial";
import ProgressList from "../components/progress/progressList";
import MemberStack from "../components/memberComponents/memberStack";
import MemberHeader from "../components/memberComponents/memberHeader";

const Members = () => {
  const [userChoose] = useState(allMembers);
  const params = useParams();
  const memberId = params.memberId;
  if (memberId) {
    return (
      <div className="container d-flex flex-row align-items-start mt-5 justify-content-between">
        <div className="d-flex flex-column">
          <Breadcrumbs />
          <OtherMembers memberId={memberId} />
        </div>
        <div className="d-flex flex-column ml-5 w-75 justify-content-between mt-5">
          <MemberHeader user={userChoose[memberId]} />
          <div className="d-flex">
            <MemberSocial user={userChoose[memberId]} />
            <div className="d-flex flex-column">
              <MemberInfo user={userChoose[memberId]} />
              <MemberStack user={userChoose[memberId]} />
              <ProgressList user={userChoose[memberId]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container mt-5">
      <h1>Все разработчики </h1>
      <UsersCards />
    </div>
  );
};

export default Members;
