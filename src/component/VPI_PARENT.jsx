import React, { useState } from 'react'
import VPI_PART_ONE from './VPI/VPI_PART_ONE'
import TABLE from './VPI/VPI_TABLE'
import Audio from "./VPI/Audio";
import data from "../Json/data";
import * as XLSX from "xlsx";


function VPI_PARENT() {
    const [audio, setAudio] = useState(null);
    return (
        <div className='container  p-5 flex flex-col gap-4'>
            <VPI_PART_ONE

            />
            <TABLE
                setAudio={setAudio}
            />
            <div className='grid grid-cols-2 gap-3 item-center w-[80%] mx-auto'>
                {audio != null && <Audio
                    id={audio}
                />}

                {audio != null && <button className='btn btn-success text-white text-lg w-[50%] ml-[auto]'
                    onClick={() => {

                        if (audio != null) {
                            // Create a worksheet from the JSON data
                            const worksheet = XLSX.utils.json_to_sheet([data[audio]]);

                            // Create a new workbook and append the worksheet
                            const workbook = XLSX.utils.book_new();
                            XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

                            // Write the workbook to a file
                            XLSX.writeFile(workbook, `${"MetaData"}.xlsx`);
                        }
                    }}
                >Download</button>
                }       </div>

        </div>
    )
}

export default VPI_PARENT