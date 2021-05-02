import React, { useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { InvoiceContext } from '../context/InvoiceContext';
import { SupplierContext } from '../context/SupplierContext';

const DropInvoice = () => {

    const { setInvoiceData } = useContext(InvoiceContext);
    const { supplierData } = useContext(SupplierContext);

    const onDropAccepted = useCallback(acceptedFiles => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const contents = e.target.result;
            const stringToArray = contents.split("\n");

            const jsonToObjects = stringToArray.map(a => {
                const validJson = a.replace(/'/g, '"');
                return JSON.parse(validJson)
            });

            const supplierArray = jsonToObjects.filter(b=>((b.line_id===4 ) && ((b.pos_id===0) || (b.pos_id===1))));

            const arrangeSupplier = supplierArray.sort((a, b) => {
                return parseFloat(a.right) - parseFloat(b.right);
            }); 
            
            const supplierName = `${arrangeSupplier[0].word} ${arrangeSupplier[1].word}`;
            const match = supplierData.includes(supplierName);
            setInvoiceData(match);
        };
        reader.readAsText(acceptedFiles[0]);
    },[setInvoiceData, supplierData])

    const { getRootProps, getInputProps} = useDropzone({ onDropAccepted });

    return (
        <div style={styles.container} >
            <div style={styles.drop} {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop Invoices.txt file here, or click to select file</p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: '50%',
        display: 'block'
    },
    drop: {
        marginTop: '20px',
        border: '3px dotted green',
        width: '98%',
        height: '94%'
    },
    select: {
        position: 'absolute'
    }
}

export default DropInvoice;
