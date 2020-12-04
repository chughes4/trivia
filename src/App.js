import React, { useState } from "react";

import "./App.css";
import Card from "./Card";
import Modal from "./Modal";

function App() {
  const [ans, setAns] = useState(null);
  const question = {
    title: "Question ",
    questOne:
      "If you see read or write errors appear in the system log, what tool should you use to correct any bad sections of the hard drive?",
    questTwo:
      "What software package allows a Linux server to share folders and printers with Windows and Mac clients?",
    questThree:
      "Which command in GRUB2 defines the location of the /boot folder to the first partition on the first hard drive on the system?",
    questFour:
      "You are using the ls command to look at a directory file’s metadata but keep seeing metadata for the files within it instead. What command option will rectify this situation?",

    ansOne: "c: fsck ",
    ansTwo: "c: Samba",
    ansThree: "a: set root=hd(0,1)",
    ansFour: "b: -d"
  };
  return (
    <>
      <h1>Test your Linux knowledge</h1>
      <div className="App">
        <div className="section">
          <div className="shapes">
            <div className="shape-one"></div>
            <div className="shape-two"></div>
            <div className="shape-three"></div>
          </div>
          <div className="FlxItems">
            <Card
              className=".FlxItems__col-1"
              question={question.questOne}
              title={question.title + "1"}
              a={"a: mount"}
              b={"b: unmount "}
              c={"c: fsck"}
              d={"dmesg"}
              e={"mkinitrd"}
              ans={ans}
              setAns={setAns}
              answer={question.ansOne}
            />
            <Card
              className=".FlxItems__col-2"
              question={question.questTwo}
              title={question.title + "2"}
              a={"a: Postfix"}
              b={"b: Apache"}
              c={"c: Samba"}
              d={"d: Kerberos"}
              e={"e: Docker"}
              ans={ans}
              setAns={setAns}
              answer={question.ansTwo}
            />
            <Card
              className=".FlxItems__col-1"
              question={question.questThree}
              title={question.title + "3"}
              a={"a: set root=hd(0,1)"}
              b={"b: set root=hd(1,0)"}
              c={"c: set root=hd(1,1)"}
              d={"d: set root=hd(0,0)"}
              e={"e: set root=first"}
              ans={ans}
              setAns={setAns}
              answer={question.ansThree}
            />
            <Card
              className=".FlxItems__col-2"
              question={question.questFour}
              title={question.title + "4"}
              a={"a: -a"}
              b={"b: -d"}
              c={"c: -F"}
              d={"d: -l"}
              e={"e: -R"}
              ans={ans}
              setAns={setAns}
              answer={question.ansFour}
            />
            <Card className=".FlxItems__col-1" />
            <Card className=".FlxItems__col-2" />
          </div>
        </div>
        {ans && <Modal ans={ans} setAns={setAns} />}
      </div>
    </>
  );
}

export default App;
