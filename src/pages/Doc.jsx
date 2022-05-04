import React from "react";
import { CardTag } from "../components/Card/Card";
import { CommentTag, NpmTags } from "../components/Tags/Tags";

import "./Doc.css";

const Doc = () => {
  return (
    <>
      <div className="installation mt-5 mb-5">
        <h1 className="text-white fw-700 fs-extra-bold mb-2">Installation</h1>
        <p className="color-grey fw-700 mb-2">
          Install Beaty Ui, the world's most popular React UI framework.
        </p>
        <p className="color-grey fw-600 mb-2">
          MUI is available as an{" "}
          <a href="https://www.npmjs.com/package/beaty-ui-library">
            npm package
          </a>
          .
        </p>
        <div className="npmInstal">
          <h2 className="fw-700 text-white fs-bold  mt-5 mb-2">npm</h2>
          <p className="color-grey mb-2">
            To install and save in your <code>package.json</code> dependencies,
            run:
          </p>
          <CardTag>
            <CommentTag>// with npm</CommentTag>
            <NpmTags>npm install beaty-ui</NpmTags>
          </CardTag>
          <p className="color-grey fw-600 mt-2">
            Please note that{" "}
            <a href="https://www.npmjs.com/package/react">react</a>
            &gt;= 17.0.0 and{" "}
            <a href="https://www.npmjs.com/package/react-dom">react-dom</a>{" "}
            &gt;= 17.0.0 are peer dependencies.
          </p>
        </div>
        <div className="mt-5">
          <h2 className="text-white fs-bold  fw-700 mb-2">Roboto Font</h2>
          <p className="color-grey fw-600 mb-2">
            Beaty UI was designed with the{" "}
            <a href="https://fonts.google.com/specimen/Roboto"> Roboto </a>
            font in mind. So be sure to follow{" "}
            <a href="/material-ui/react-typography/#general">
              these instructions
            </a>
            . For instance, via Google Web Fonts:
          </p>
          <CardTag>
            <pre>
              <code className="language-html d-flex flex-column flex-wrap">
                <span className="token tag">
                  <div className="token tag linkTag-color ">
                    <span className="token punctuation text-white">&lt;</span>
                    link
                  </div>
                  <div>
                    {" "}
                    <span className="token attr-name green-color">rel</span>
                    <span className="token attr-value">
                      <span className="token punctuation attr-equals">=</span>
                      <span className="token punctuation">"</span>
                      stylesheet
                      <span className="token punctuation">"</span>
                    </span>
                  </div>
                  <div>
                    {" "}
                    <span className="token attr-name green-color">href</span>
                    <span className="token attr-value">
                      <span className="token punctuation attr-equals">=</span>
                      <span className="token punctuation">"</span>
                      https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap
                      <span className="token punctuation">"</span>
                    </span>
                  </div>
                  <div className="token punctuation">/&gt;</div>
                </span>
              </code>
            </pre>
          </CardTag>
        </div>
      </div>
    </>
  );
};

export default Doc;
