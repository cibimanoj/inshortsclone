import React from "react";
import "./content.css"
import Container from "@mui/material/Container";
import Card from "../card/Card";

export const Content = ({newsArray,result,loadMore,setLoadmore}) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadlink">
          <span className="linktext">
          For the best experience use inshorts app on your smartphone.
          </span>
          <img src="https://assets.inshorts.com/website_assets/images/appstore.png" alt="applestore img" height="80%"/>
          <img src="https://assets.inshorts.com/website_assets/images/playstore.png" alt="playstore img" height="80%"/>
          </div>
          {
            newsArray.map((news)=>(
            <Card news={news} key={news.title}/>
            ))}
            {
              loadMore <=result &&(
                <>
                <hr/>
                <button className="loadMore" onClick={()=>setLoadmore(loadMore + 20)}>Load More</button>
                </>
              )
            }
        </div>     
    </Container>
  );
};
