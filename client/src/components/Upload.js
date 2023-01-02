import React, { useRef, useState } from "react";
import uploadIcon from "../../assets/img/upload.png";
import VideoPlayer from "../VideoPage";

const Index = () => {

    const videoRef = useRef(null);

    const [source, setSource] = useState("");
    const [fileType, setFileType] = useState("");
    const [error, setError] = useState("");
    const [width, setWidth] = useState(10);
    const [audioName, setAudioName] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        let type = file.type?.split("/")[1];
        setAudioName(file?.name);

        if (type === "mp4" || type === "m4v" || type === "mpeg") {
            setFileType(type)
        }
        else {
            setFileType("");
            setError("File format not supported.")
        }
        const url = URL.createObjectURL(file);
        setSource(url);
    };

    return (
        <>
            {
                fileType !== "" ?

                    <VideoPlayer source={source} setSource={setSource} width={width} setWidth={setWidth} fileType={fileType} audioName={audioName} />
                    :
                    <div
                        className="h-[100vh] flex items-center "
                        style={{
                            background: "linear-gradient(180deg, #4C547B 0%, #000000 100%)",
                        }}
                    >
                        <div className="container mx-auto px-4">
                            <div className="flex justify-center flex-col items-center">
                                <img src={uploadIcon} />

                                <div
                                    className="my-8 relative bg-white rounded-xl py-4 cursor-pointer"
                                    style={{ cursor: "pointer" }}
                                >

                                    <input
                                        //ref={inputRef}
                                        type="file"
                                        onChange={(e) => handleFileChange(e)}
                                        className="opacity-0 relative z-[3] cursor-pointer"
                                        accept=".m4v,.mp4,.mp3"
                                    />

                                    <p
                                        className="cursor-pointer text-black absolute z-[1] text-3xl flex items-center justify-center top-0 left-0 right-0 bottom-0 text-center"
                                        style={{ fontFamily: "ubermovemedium-webfont" }}
                                    >
                                        Upload a file
                                    </p>
                                </div>

                                <p
                                    className="text-white text-center text-3xl"
                                    style={{ fontFamily: "ubermovemedium-webfont" }}
                                >
                                    M4V, mp4, mp3
                                </p>

                                {
                                    <p
                                        className="text-white text-center text-3xl"
                                        style={{ fontFamily: "ubermovemedium-webfont" }}
                                    >
                                        {error}
                                    </p>
                                }
                            </div>

                        </div>


                    </div>

            }

        </>
    );
}

export default Index;
