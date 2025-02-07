import { createContext, useState } from "react";
import run from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompts, setPreviousPrompts] = useState([]); // Changed to previousPrompts
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const onSent = async (prompt) => {
    const currentInput = prompt || input;
    if (!currentInput.trim()) return;

    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(currentInput);

    try {
      const responses = await run(currentInput);

      // Update previousPrompts array
      setPreviousPrompts((prevPrompts) => {
        // Avoid duplicate prompts
        if (!prevPrompts.includes(currentInput)) {
          return [currentInput, ...prevPrompts];
        }
        return prevPrompts;
      });

      const responseArray = responses.split("**");
      let formattedResponse = "";

      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          formattedResponse += responseArray[i];
        } else {
          formattedResponse += "<b>" + responseArray[i] + "</b>";
        }
      }

      let finalResponse = formattedResponse.replace(/\*/g, "<br>");
      let wordsArray = finalResponse.split(" ");

      wordsArray.forEach((word, index) => {
        delayPara(index, word + " ");
      });
    } catch (error) {
      console.error("Error:", error);
      setResultData("An error occurred while processing your request.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const contextValue = {
    previousPrompts, // Changed from previousPrompt
    setPreviousPrompts, // Changed from setPreviousPrompt
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
