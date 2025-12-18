const { Web3 } = require("web3")
const web3 = new Web3("HTTP://127.0.0.1:7545")

async function Blockfunction(address) {
    const accounts = await web3.eth.getAccounts();
    // console.log(accounts);
    
    const account = accounts[2]
    // console.log("Account: " + account);

    const balanceWei = await web3.eth.getBalance(account)
    // console.log("Balance in Wei: ", balanceWei)

    const balanceEth = web3.utils.fromWei(balanceWei.toString(), 'ether')
    // console.log("Balance in Eth: ", balanceEth)

    const sender = accounts[5]
    const receiver = accounts[2]

    const senderbalanceWei = await web3.eth.getBalance(sender)
    const senderbalanceEth = web3.utils.fromWei(senderbalanceWei.toString(), 'ether')
    
    const receiverbalanceWei = await web3.eth.getBalance(receiver)
    const receiverbalanceEth = web3.utils.fromWei(receiverbalanceWei.toString(), 'ether')

    const tx = await web3.eth.sendTransaction({
        from: sender,
        to: receiver,
        value: web3.utils.toWei("1", "ether"),
    })
    if(tx) {
        console.log("Sender: ", sender, "\n Balance:", senderbalanceEth, "\n Amount Trasferred:", receiver, "\n Valance:", receiverbalanceEth);
    } else {
        console.log("some Error Occured");
    }
}

Blockfunction();



// note 
// 1- why are we using async function here?
// 2- why are we using toString();
// 3- why are we using await


