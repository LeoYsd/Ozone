import { ProfileIcon } from "../../../assets/svgs";
import { WalletIcon } from "../../../assets/svgs";

const ConnectWallet = () => (
    <div className="flex text-white bg-hack rounded-lg py-2.5 px-4 font-robotoMd text-md items-center w-fit justify-between cursor-pointer trans hover:text-lailac ml-4">
        <div>{WalletIcon}</div>
        <p className="whitespace-nowrap px-3">Connect Wallet</p>
        <div className="w-px bg-white h-5 mx-3" />
        <div>{ProfileIcon}</div>
    </div>
);

export default ConnectWallet;