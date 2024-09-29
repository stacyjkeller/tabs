"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [htmlVisible, setHtmlVisible] = useState(true);
  const [cssVisible, setCssVisible] = useState(false);
  const [jsVisible, setJsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleHtmlClick = () => {
    setActiveTab(0);
    setHtmlVisible(true);
    setCssVisible(false);
    setJsVisible(false);
  };

  const handleCssClick = () => {
    setActiveTab(1);
    setHtmlVisible(false);
    setCssVisible(true);
    setJsVisible(false);
  };

  const handleJsClick = () => {
    setActiveTab(2);
    setHtmlVisible(false);
    setCssVisible(false);
    setJsVisible(true);
  };

  return (
    <div className={styles.page}>
      <nav role="tablist">
        <button
          onClick={handleHtmlClick}
          className={activeTab === 0 ? "activeTab" : ""}
          role="tab"
          id="tab-0"
          aria-controls="tabpanel=0"
          aria-selected={activeTab === 0 ? true : false}
        >
          HTM
        </button>
        <button
          onClick={handleCssClick}
          className={activeTab === 1 ? "activeTab" : ""}
          role="tab"
          id="tab-1"
          aria-controls="tabpanel=1"
          aria-selected={activeTab === 0 ? true : false}
        >
          CSS
        </button>
        <button
          onClick={handleJsClick}
          className={activeTab === 2 ? "activeTab" : ""}
          role="tab"
          id="tab-2"
          aria-controls="tabpanel=2"
          aria-selected={activeTab === 0 ? true : false}
        >
          JavaScript
        </button>
      </nav>
      <main className={styles.main}>
        <div>
          {htmlVisible && (
            <section role="tabpanel" id="tabpanel-0" aria-labelledby="tab-0">
              <p>
                The HyperText Markup Language or HTML is the standard markup
                language for documents designed to be displayed in a web
                browser.
              </p>
            </section>
          )}
          {cssVisible && (
            <section role="tabpanel" id="tabpanel-1" aria-labelledby="tab-1">
              <p>
                Cascading Style Sheets is a style sheet language used for
                describing the presentation of a document written in a markup
                language such as HTML or XML.
              </p>
            </section>
          )}
          {jsVisible && (
            <section role="tabpanel" id="tabpanel-2" aria-labelledby="tab-2">
              <p>
                JavaScript, often abbreviated as JS, is a programming language
                that is one of the core technologies of the World Wide Web,
                alongside HTML and CSS.
              </p>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
