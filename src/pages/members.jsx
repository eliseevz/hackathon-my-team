
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { allMembers } from "../API/API";
import Badge from "../components/UI/badge/badge";
import Progress from "../components/progress/progress";
import classes from "./members.module.css";
import Breadcrumbs from "../components/Breadcrumbs/breadcrumbs";
import OtherMembers from "../components/memberComponents/otherMembers";
import UsersCards from "../components/Card/usersCards";
import MemberInfo from "../components/memberComponents/memberInfo";
import MemberSocial from "../components/memberComponents/memberSocial";
import ProgressList from "../components/progress/progressList";
import MemberStack from "../components/memberComponents/memberStack";
import MemberHeader from "../components/memberComponents/memberHeader";
import is from "is_js";


const Members = () => {
  const [userChoose, setUserChoose] = useState(allMembers)
  const params = useParams()
  const memberId = params.memberId
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
            {/*<div className="d-flex flex-column ">*/}
            {/*  <img*/}
            {/*    // src={userChoose[memberId].imageURL}*/}
            {/*    src={is.url(userChoose[memberId].imageURL) ? userChoose[memberId].imageURL : "https://grilcity.ru/assets/img/testimonials/placeholder.png"}*/}
            {/*    alt="img"*/}
            {/*    className={classes.members__image}*/}
            {/*  />*/}
            {/*  <div className="mt-2 d-flex align-items-center justify-content-center">*/}
            {/*    {userChoose[memberId].socialMedia.map(({ name, link }) => {*/}
            {/*      if(is.url(link)) {*/}
            {/*        return (*/}
            {/*            <a href={link} className="pe-3" className={classes.socialMedia}>*/}
            {/*              <i*/}
            {/*                  className={`social__media bi bi-${name}`}*/}
            {/*                  style={{ fontSize: "30px" }}*/}
            {/*              />*/}
            {/*            </a>*/}
            {/*        )*/}
            {/*      }*/}
            {/*    })}*/}
            {/*  </div>*/}
            {/*</div>*/}

            <div className="d-flex flex-column">
              <MemberInfo user={userChoose[memberId]} />
              <MemberStack user={userChoose[memberId]} />
              <ProgressList user={userChoose[memberId]} />
              {/*<span className={classes.members__info}>*/}
              {/*  <b>Страна:</b> {userChoose[memberId].country}*/}
              {/*</span>*/}
              {/*<span className={classes.members__info}>*/}
              {/*  <b>Возраст: </b>*/}
              {/*  {userChoose[memberId].age}*/}
              {/*</span>*/}
              {/*<span className={classes.members__info}>*/}
              {/*  <b>О себе: </b>*/}
              {/*  {userChoose[memberId].about}*/}
              {/*</span>*/}
              {/*<span className={classes.members__info}>*/}
              {/*  <b>Участие в данном проекте: </b>*/}
              {/*  {userChoose[memberId].impact}*/}
              {/*</span>*/}
              {/*<div className={`d-flex ${classes.members__info}`}>*/}
              {/*  <span>*/}
              {/*    <b>Стэк технологий: </b>*/}
              {/*  </span>*/}
              {/*  {userChoose[memberId].stack.map(({ name }) => (*/}
              {/*    <span class={classes.members__stack} key={name}>*/}
              {/*      {name}*/}
              {/*    </span>*/}
              {/*  ))}*/}
              {/*</div>*/}
              {/*<div className={classes.progress__container}>*/}
              {/*  <span>Прогресс: </span>*/}
              {/*  {userChoose[memberId].stack.map(({ name, prog }) => (*/}
              {/*    <Progress name={name} percent={prog} />*/}
              {/*  ))}*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container mt-5">
      <UsersCards />
    </div>
  );
};


export default Members