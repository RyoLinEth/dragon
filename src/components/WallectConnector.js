import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers';
import swal from 'sweetalert'
import ErrorMessage from './ErrorMessage';

const WalletConnect = ({ defaultAccountChange, defaultChainChange, language }) => {
    const [defaultAccount, setDefaultAccount] = useState(null)
    const [connectButtonText, setConnectButtonText] = useState("Connect Wallet")

    const [errorText, setErrorText] = useState(null);

    useEffect(() => {
        changingAccount();
        defaultAccountChange(defaultAccount);
    }, [defaultAccount])

    async function changingAccount() {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', () => {
                connectWalletHandler()
            })
            window.ethereum.on('chainChanged', () => {
                connectWalletHandler()
            })
        }
    }

    const connectWalletHandler = async () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(async (result) => {
                    await accountChangeHandler(result[0]);
                    setConnectButtonText(`${result[0].slice(0, 4)}...${result[0].slice(-4)}`);
                })
        } else {
            swal('Error', 'Need to install MetaMask!', 'error')
        }
    }

    const accountChangeHandler = async (newAccount) => {
        checkCorrectNetwork();
        setDefaultAccount(newAccount);
    }

    const checkCorrectNetwork = async () => {
        const { ethereum } = window
        const chainId = await ethereum.request({ method: 'eth_chainId' })
        console.log('Connected to chain:' + chainId)
        defaultChainChange(chainId);
    }

    return (
        <div className="btnConnect">

            {
                errorText !== null &&
                <ErrorMessage
                    errorMessage={errorText}
                    setErrorText={setErrorText}
                />
            }
            <button
                onClick={connectWalletHandler}
                className="btn btn-primary rounded-pill"
                style={{
                    maxWidth: '120px',
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '40px'
                }}
            >{connectButtonText}</button>
        </div>
    )
}

export default WalletConnect
