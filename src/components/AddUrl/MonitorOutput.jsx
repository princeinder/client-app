import React from "react";
import ReactCrop from "react-image-crop";
const MonitorOutput = ({ crop, setCrop, screenshot, html, keywords }) => {
    return (
        <div className="output" style={{ textAlign: "center" }}>
            {screenshot && (
                <ReactCrop
                    src={`images/${screenshot}`}
                    crop={crop}
                    onChange={(newCrop) => setCrop(newCrop)}
                />
            )}
            {html && html}
            {keywords && keywords}
        </div>
    );
};

export default MonitorOutput;
