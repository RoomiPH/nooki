import React from "react";
const SWITCH_WIDTH_PX = 30;
const HANDLE_DIAMETER_PX = 10;
const SWITCH_OFFSET_PX = 3;

const Switch = (
{
    value,
    onClick,
} :
{
    value: any,
    onClick: any,
}) => {
 return (
   <div
     style={{
       width: SWITCH_WIDTH_PX,
       height: HANDLE_DIAMETER_PX + 2 * SWITCH_OFFSET_PX,
       borderRadius: HANDLE_DIAMETER_PX,
       border: "2px #505050 solid",
       position: "relative",
       transition: "1s",
       cursor: "pointer",
     }}
     className="switch"
     onClick={() => {
       onClick(!value);
     }}
   >
     <div
       style={{
         border: "2px #505050 solid",
         borderRadius: "100%",
         height: HANDLE_DIAMETER_PX,
         width: HANDLE_DIAMETER_PX,
         position: "absolute",
         top: SWITCH_OFFSET_PX - 2,
         left: value
           ? SWITCH_WIDTH_PX - HANDLE_DIAMETER_PX - SWITCH_OFFSET_PX - 3
           : SWITCH_OFFSET_PX + 0.5,
         transition: "1s",
       }}
     ></div>
     <input
       type="checkbox"
       value={value}
       onChange={(e) => {
         onClick(e.target.value);
       }}
       style={{ display: "none" }}
     />
   </div>
 );
};
export default Switch;
