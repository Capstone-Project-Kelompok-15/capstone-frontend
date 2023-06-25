import React from "react"

function Modal({
    Message,
    confirmationMessage,
    proceedMessage,
    cancelMessage,
    handleProceed,
    handleCancel,
    muteModal,
    formik,
    idRadio1,
    idRadio2,
    idRadio3,
    idRadio4,
    radioName,
    valueRadio1,
    valueRadio2,
    valueRadio3,
    valueRadio4,
    radioMessage1,
    radioMessage2,
    radioMessage3,
    radioMessage4,
    idProceedButton,
    idCancelButton,
    textBlue,
}) {
    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
            {muteModal ? (
                <div className="w-[469px] h-[484px] bg-[#FFFFFF] rounded-[22px]">
                    <div className="w-[320px] h-[420px] text-center mt-[30px] ml-[75px]">
                        <h1 className="font-bold font-source-sans text-[24px] text-[#2C2C2C]">
                            {Message}
                        </h1>
                        <form
                            onSubmit={formik.handleSubmit}
                            className="mt-[38px]">
                            <div className="flex justify-center ml-[40px]">
                                <div>
                                    <div className="w-[234px] h-[43px] flex">
                                        <input
                                            type="radio"
                                            value={valueRadio1}
                                            id={idRadio1}
                                            name={radioName}
                                            onChange={formik.handleChange}
                                        />
                                        <div>
                                            <span className="font-source-sans text-[24px] ml-[10px]">
                                                {radioMessage1}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[234px] h-[43px] flex">
                                <input
                                    type="radio"
                                    value={valueRadio2}
                                    id={idRadio2}
                                    name={radioName}
                                    onChange={formik.handleChange}
                                />
                                <div>
                                    <span className="font-source-sans text-[24px] ml-[10px]">
                                        {radioMessage2}
                                    </span>
                                </div>
                            </div>
                            <div className="w-[234px] h-[43px] flex">
                                <input
                                    type="radio"
                                    value={valueRadio3}
                                    id={idRadio3}
                                    name={radioName}
                                    onChange={formik.handleChange}
                                />
                                <div>
                                    <span className="font-source-sans text-[24px] ml-[10px]">
                                        {radioMessage3}
                                    </span>
                                </div>
                            </div>
                            <div className="w-[234px] h-[43px] flex">
                                <input
                                    type="radio"
                                    value={valueRadio4}
                                    id={idRadio4}
                                    name={radioName}
                                    onChange={formik.handleChange}
                                />
                                <div>
                                    <span className="font-source-sans text-[24px] ml-[10px]">
                                        {radioMessage4}
                                    </span>
                                </div>
                            </div>

                            <p className="font-source-sans font-normal text-[17px] text-[#808080] mt-[18px]">
                                {confirmationMessage}
                            </p>
                            <div>
                                <button
                                    type="submit"
                                    onClick={handleProceed}
                                    id={idProceedButton}>
                                    <p className="font-source-sans font-bold text-[24px] text-[#AA1512] mt-[18px]">
                                        {proceedMessage}
                                    </p>
                                </button>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    id={idProceedButton}>
                                    <p className="font-source sans font-bold text-[24px] mt-[18px] text-[#2C2C2C]">
                                        {cancelMessage}
                                    </p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="w-[469px] h-[244px] bg-[#FFFFFF] rounded-[22px]">
                    <div className="w-[366px] h-[184px] text-center ml-[50px] mt-[30px]">
                        <h1 className="font-bold font-source-sans text-[24px] text-[#2C2C2C]">
                            {Message}
                        </h1>
                        <p className="font-source-sans font-normal text-[17px] text-[#808080] mt-[18px]">
                            {confirmationMessage}
                        </p>
                        <div>
                            <div>
                                <button
                                    type="button"
                                    onClick={handleProceed}
                                    id={idProceedButton}>
                                    <p
                                        className={`font-source-sans font-bold text-[24px] mt-[18px] ${
                                            textBlue === "blue"
                                                ? "text-[#195FAA]"
                                                : "text-[#AA1512]"
                                        } `}>
                                        {proceedMessage}
                                    </p>
                                </button>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    id={idCancelButton}>
                                    <p className="font-source sans font-bold text-[24px] mt-[18px] text-[#2C2C2C]">
                                        {cancelMessage}
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal
