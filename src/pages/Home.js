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
            <div>
                {invoiceData===null ? 
                '':
                invoiceData===true ?
                'Invoice contains listed Supplier'
                : 
                `Invoice doesn't contain listed Supplier`
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
    row: {
        display: 'flex',
        marginBottom: '30px'
    }
}

export default Home;
