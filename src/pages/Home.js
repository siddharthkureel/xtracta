import React, { useContext } from 'react';

import DropSupplier from '../components/DropSupplier';
import DropInvoice from '../components/DropInvoice';
import { SupplierContext } from '../context/SupplierContext';
import { InvoiceContext } from '../context/InvoiceContext';

const Home = () => {

    const { supplierData } = useContext(SupplierContext);
    const { invoiceData } = useContext(InvoiceContext)

    return (
        <div style={styles.container} >
            <div style={styles.row} >
                <DropSupplier />
                {supplierData ? <DropInvoice /> : null}
            </div>
            <div style={styles.content} >
                {invoiceData===null ? 
                '':
                invoiceData===true ?
                <h2 style={styles.success} >Invoice contains supplier in the list</h2>
                : 
                <h2 style={styles.error} >Invoice doesn't contain supplier in the list</h2>
                }
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'block',
        width: '100%',
        height: '80vh'
    },
    content: {
        margin: '8%'
    },
    row: {
        display: 'flex',
        marginBottom: '30px'
    },
    success: {
        color: 'green',
        textAlign: 'center'
    },
    error: {
        color: 'red',
        textAlign: 'center'
    }
}

export default Home;
