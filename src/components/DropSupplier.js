import React, { useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';

import { SupplierContext } from '../context/SupplierContext';

const DropSupplier = () => {

    const { setSupplierData } = useContext(SupplierContext);

    const onDropAccepted = useCallback(acceptedFiles => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const contents = e.target.result;
            const stringToArray = contents.split("\r\n");

            const jsonToObjects = stringToArray.map(a => {
                const validJson = a.split(',');
                return validJson[1]
            });

            setSupplierData(jsonToObjects)
        };
        reader.readAsText(acceptedFiles[0]);
    }, [setSupplierData])

    const { getRootProps, getInputProps} = useDropzone({ onDropAccepted });
    
    return (
        <div style={styles.container} >
            <div style={styles.drop} {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop Suppliernames.txt file here, or click to select file</p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: '50%'
    },
    drop: {
        marginTop: '20px',
        border: '3px dotted gold',
        width: '98%',
        height: '94%'
    }
}

export default DropSupplier;
