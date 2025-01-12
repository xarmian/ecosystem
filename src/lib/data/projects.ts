interface Project {
    id: number;
    title: string;
    type: string;
    description: string;
    logo: string | null;
    twitter: string | null;
    status: 'active' | 'inactive';
    url: string | null;
    new: boolean;
    featured?: boolean;
}

const BASE_LOGO_URL = 'https://voirewards.com';

export const projects: Project[] = [
    {
        id: 7,
        title: 'Kibisis',
        type: 'Wallet',
        description: 'Get started in the Voi ecosystem with Kibisis \nWallet. Available as a Browser Extension or Mobile App.',
        logo: `${BASE_LOGO_URL}/logos/kibisis.png`,
        twitter: 'https://x.com/kibisis_wallet',
        status: 'active',
        url: 'https://kibis.is',
        new: false,
        featured: true
    },
    {
        id: 11,
        title: 'Humble',
        type: 'DEX',
        description: 'Humble is a decentralized exchange platform on Voi, enabling the token trading and liquidity provisioning.',
        logo: `${BASE_LOGO_URL}/logos/humble.svg`,
        twitter: 'https://x.com/HumbleDefi',
        status: 'active',
        url: 'https://voi.humble.sh/',
        new: false,
        featured: true
    },
    {
        id: 10,
        title: 'Nomadex',
        type: 'DEX',
        description: 'Nomadex is a decentralized exchange on Voi, enabling the token trading and liquidity provisioning.',
        logo: `${BASE_LOGO_URL}/logos/NomadexLogoFull.webp`,
        twitter: 'https://x.com/nomadex_app',
        status: 'active',
        url: 'https://voi.nomadex.app',
        new: true,
        featured: true
    },
    {
        id: 8,
        title: 'Nautilus',
        type: 'NFT Marketplace',
        description: 'Nautilus is an NFT marketplace on Voi. Buy and list NFTs with ease.',
        logo: `${BASE_LOGO_URL}/logos/nautilus.png`,
        twitter: 'https://x.com/NautilusNFTs',
        status: 'active',
        url: 'https://nautilus.sh',
        new: false,
        featured: true
    },
    {
        id: 13,
        title: 'High Forge',
        type: 'NFT Minting',
        description: 'High Forge is an NFT minting platform. Launch your own collection or Mint a token from an existing one.',
        logo: `${BASE_LOGO_URL}/logos/highforge.png`,
        twitter: 'https://x.com/highforgeio',
        status: 'active',
        url: 'https://highforge.io/',
        new: false,
        featured: true
    },
    {
        id: 17,
        title: 'Aramid Finance',
        type: 'Bridge',
        description: 'Aramid Finance Token Bridge, bridge tokens between Voi and Base, Arbitrum, and Algorand',
        logo: `${BASE_LOGO_URL}/logos/aramid.png`,
        twitter: 'https://x.com/AramidFinance',
        status: 'active',
        url: 'https://www.aramid.finance/',
        new: false,
        featured: true
    },
    {
        id: 2,
        title: 'Arcpay',
        type: 'Payments',
        description: 'Arcpay is a payment gateway platform and SDK. Integrate Web3 payments with ease.',
        logo: null,
        twitter: null,
        status: 'active',
        url: null,
        new: false
    },
    {
        id: 9,
        title: 'NFT Navigator',
        type: 'NFT Discovery',
        description: 'NFT Navigator is a Discovery, Analytics, and Social platform for Voi NFTs.',
        logo: `${BASE_LOGO_URL}/logos/nftnavigator.png`,
        twitter: 'https://x.com/voinftnavigator',
        status: 'active',
        url: 'https://nftnavigator.xyz',
        new: false
    },
    {
        id: 18,
        title: 'Biatec Scheduler',
        type: 'Tools',
        description: 'Biatec Scheduler is a decentralized scheduling platform.',
        logo: null,
        twitter: 'https://x.com/EAlgonaut',
        status: 'active',
        url: 'https://scheduler.biatec.io/',
        new: false
    },
    {
        id: 25,
        title: 'Voi Explorer',
        type: 'Explorers',
        description: 'Inspect network details, search accounts, blocks, and transactions',
        logo: `${BASE_LOGO_URL}/logos/voi_logo.png`,
        twitter: null,
        status: 'active',
        url: 'https://block.voi.network',
        new: true
    },
    {
        id: 3,
        title: 'Womp Crew',
        type: 'Gaming',
        description: 'Engage with the Womp Crew Poker Party, spread the word, and earn tokens',
        logo: `${BASE_LOGO_URL}/logos/womp.png`,
        twitter: 'https://x.com/wompcrew',
        status: 'active',
        url: 'https://discord.com/invite/jhY9QHnkCd',
        new: false
    },
    {
        id: 22,
        title: 'Lute',
        type: 'Wallets',
        description: 'Lute is a Webapp and Extension wallet that supports the Ledger Hardware Wallet',
        logo: `${BASE_LOGO_URL}/logos/lute.svg`,
        twitter: 'https://x.com/LuteWallet',
        status: 'active',
        url: 'https://lute.app',
        new: false
    },
    {
        id: 6,
        title: 'Voi Swarm',
        type: 'Node Running',
        description: 'Voi Swarm is a one-line node installer and management suite for Voi Nodes. Run a participation node to help maintain the security and integrity of the Voi Network and earn block rewards.',
        logo: `${BASE_LOGO_URL}/logos/voi_logo.png`,
        twitter: 'https://x.com/Voi_Net',
        status: 'active',
        url: 'https://voinetwork.github.io/voi-swarm/',
        new: false
    },
    {
        id: 4,
        title: 'AlgoLeagues',
        type: 'AlgoLeagues Discord Bot',
        description: 'AlgoLeagues Discord Bot facilitates transferring, withdrawing, and tipping Voi assets in Discord servers.',
        logo: `${BASE_LOGO_URL}/logos/algoleagues.png`,
        twitter: 'https://x.com/algoleagues',
        status: 'active',
        url: 'https://www.algoleagues.com/',
        new: false
    },
    {
        id: 23,
        title: 'AlgoTools',
        type: 'Tools',
        description: 'A collection of tools to constuct, sign, and send transactions. Make payments, transfer and manage assets, register participation keys, rekey, and more.',
        logo: `${BASE_LOGO_URL}/logos/algotools.svg`,
        twitter: null,
        status: 'active',
        url: 'https://algotools.org/',
        new: false
    },
    {
        id: 24,
        title: "Aust's 1-Click Node",
        type: 'Infrastructure',
        description: 'A1CN is a cross-platform Participation Node Running application with a Graphical Interface for Windows, MacOS, or Linux. Run a node to participate in consensus and earn block rewards.',
        logo: null,
        twitter: null,
        status: 'active',
        url: 'https://github.com/AustP/austs-one-click-node',
        new: false
    },
    {
        id: 26,
        title: 'VoiX Staking Platform',
        type: 'Tools',
        description: "Voi's Locking and Staking Platform. Manage your TestNet reward and incentivized staking contracts.",
        logo: `${BASE_LOGO_URL}/logos/voi_logo.png`,
        twitter: null,
        status: 'active',
        url: 'https://voix.nautilus.sh',
        new: true
    },
    {
        id: 27,
        title: 'AVMExplorer',
        type: 'Explorers',
        description: 'Advanced network explorer for blocks, transactions, and assets, including ARC-200 tokens.',
        logo: `${BASE_LOGO_URL}/logos/avmexplorer.svg`,
        twitter: null,
        status: 'active',
        url: 'https://avmexplorer.com',
        new: true
    },
    {
        id: 28,
        title: 'Chris Thank You Tokens',
        type: 'NFTs',
        description: 'A token created by Chris Swenor to symbolically recognize and show appreciation for people, with no monetary value or guarantees of additional benefits.',
        logo: 'https://voirewards.com/logos/chris-tyt.png',
        twitter: null,
        status: 'active',
        url: 'https://chris.thankyou.sh/',
        new: true
    },
    {
        id: 29,
        title: 'Community Chest',
        type: 'gaming',
        description: "A collaborative pool where members can deposit VOI for a chance to win big! Every deposit increases the chest's value, and weekly draws give participants the opportunity to win exciting rewards.",
        logo: `${BASE_LOGO_URL}/logos/communitychest.svg`,
        twitter: null,
        status: 'active',
        url: 'https://nautilus.sh/#/community-chest',
        new: true
    },
    {
        id: 15,
        title: 'Biatec Wallet (A-Wallet)',
        type: 'Wallet',
        description: 'Biatec Wallet (formerly A-Wallet) is a wallet for the Voi Network with Multi-sig wallet, Ledger, and WalletConnect 2.0 support',
        logo: `${BASE_LOGO_URL}/logos/biatec-wallet.svg`,
        twitter: 'https://x.com/EAlgonaut',
        status: 'active',
        url: 'https://wallet.biatec.io',
        new: false
    },
    {
        id: 30,
        title: 'Voi Fountain',
        type: 'Tools',
        description: 'A community-driven faucet with bonus rewards for active users and contributors',
        logo: 'https://fountain.voirewards.com/apple-touch-icon-167x167.png',
        twitter: null,
        status: 'active',
        url: 'https://fountain.voirewards.com',
        new: true
    },
    {
        id: 31,
        title: "Funk's Ultimate Node Controller",
        type: 'Infrastructure',
        description: 'FUNC is a Cross-platform Service that makes it easy to spin up a node for Voi or Algorand and start participating in consensus.',
        logo: `${BASE_LOGO_URL}/logos/func.png`,
        twitter: null,
        status: 'active',
        url: 'https://github.com/GalaxyPay/func',
        new: true
    },
    {
        id: 32,
        title: 'Voiager',
        type: 'Explorers',
        description: 'Block explorer designed for seamless navigation and exploration of blockchain data. It provides detailed insights into transactions, blocks, accounts, and smart contracts, empowering users to track activity and analyze trends with ease.',
        logo: 'https://voirewards.com/logos/voiager-explorer.png',
        twitter: null,
        status: 'active',
        url: 'https://voiager.xyz',
        new: true
    }
]; 
