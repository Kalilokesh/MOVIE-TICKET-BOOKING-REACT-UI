import React from "react";
function SelectSeat(props) {
    let classL = {};
    let comp;
    if (props.occupied) {
        console.log('inside props.occupied');
        classL = {
            0: [...props.occupied].map((x) => Number(x)).includes(0)
                ? "seat occupied"
                : "seat",
            1: [...props.occupied].map((x) => Number(x)).includes(1)
                ? "seat occupied"
                : "seat",
            2: [...props.occupied].map((x) => Number(x)).includes(2)
                ? "seat occupied"
                : "seat",
            3: [...props.occupied].map((x) => Number(x)).includes(3)
                ? "seat occupied"
                : "seat",
            4: [...props.occupied].map((x) => Number(x)).includes(4)
                ? "seat occupied"
                : "seat",
            5: [...props.occupied].map((x) => Number(x)).includes(5)
                ? "seat occupied"
                : "seat",
            6: [...props.occupied].map((x) => Number(x)).includes(6)
                ? "seat occupied"
                : "seat",
            7: [...props.occupied].map((x) => Number(x)).includes(7)
                ? "seat occupied"
                : "seat"
        };
        console.log('classL', classL)
        comp = (
            <div className="row">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                    <div
                        id={props.row + index}
                        onClick={props.click}
                        className={classL[index]}
                    ></div>
                ))}
            </div>
        );
    } else {
        comp = <></>;
    }
    return comp;
}
export default SelectSeat;
