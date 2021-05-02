import React, { useState } from 'react';

import Navbar from './components/Navbar';
import { SupplierContext } from './context/SupplierContext';
import { InvoiceContext } from './context/InvoiceContext';
import Home from "./pages/Home";

const App = () => {

    const [supplierData, setSupplierData] = useState(null);
    const [invoiceData, setInvoiceData] = useState(null);
    
    return (
        <div style={styles.container} >
            <InvoiceContext.Provider  value={{ invoiceData, setInvoiceData }}>
                <SupplierContext.Provider value={{ supplierData, setSupplierData }} >
                    <Navbar />
                    <Home/>
                </SupplierContext.Provider>
            </InvoiceContext.Provider>
        </div>
    );
}

const styles = {
    container: {
        margin: '0 5%'
    }
}

export default App;
