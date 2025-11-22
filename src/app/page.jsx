// src/app/page.jsx
"use client";
import React, { useEffect, useState } from "react";
import ClassGrid from "../components/ClassGrid";
import { sha256, correctHash } from "../password";

const modulesData = [
  {
    sectionId: "all",
    title: "All Classes",
    items: [
      {
        id: "a1",
        title: "Crypto Elliot Wave Secrets",
        desc: "Liveclass",
        videoId: "vb3zCVn3mTE",
      },
      {
        id: "a2",
        title: "Suli Crypto Trading Bootcamp",
        desc: "Bootcamp",
        videoId: "6o9uAZpDU5Q",
      },
      {
        id: "a3",
        title: "Foundation of Crypto & Forex",
        desc: "Overview",
        videoId: "6o9uAZpDU5Q",
      },
      {
        id: "a4",
        title: "DOW Theory & Basic Of Market - Trade With Suli Modul",
        desc: "Core",
        videoId: "H-yeabuyO6w",
      },
      {
        id: "a5",
        title: "Crypto Trend Liveclass",
        desc: "Liveclass",
        videoId: "m9mpeECMyxY",
      },
      {
        id: "a6",
        title: "Crypto Candlestick Liveclass",
        desc: "Bootcamp",
        videoId: "V6xt433C8L0",
      },
      {
        id: "a7",
        title: "Chart Review - Trade With Suli Modul",
        desc: "Overview",
        videoId: "Hp_sxQMuSmQ",
      },
      {
        id: "a8",
        title: "Chart Review",
        desc: "Core",
        videoId: "pok45zJBYBg",
      },
      {
        id: "a9",
        title: "Chart Review 2",
        desc: "Liveclass",
        videoId: "Uyz6hINw22Y",
      },
      {
        id: "a10",
        title: "Crypto Chart Pattern Liveclass - Trade With Suli",
        desc: "Bootcamp",
        videoId: "J07Y214AfY8",
      },
      {
        id: "a11",
        title: "Trading Psychology Liveclass - Trade With Suli",
        desc: "Overview",
        videoId: "UtMLAeys4VY",
      },
      {
        id: "a12",
        title: "Trading Plan Liveclass",
        desc: "Core",
        videoId: "fDjGHrTek1U",
      },
      {
        id: "a13",
        title: "Context Over Technical Analysis",
        desc: "Liveclass",
        videoId: "zOSRdF1k38Q",
      },
      {
        id: "a14",
        title: "Passive VS Active Participant",
        desc: "Bootcamp",
        videoId: "tCEiqkFVuOI",
      },
      {
        id: "a15",
        title: "Scalp VS Swing Which Trading Style Fits You Best",
        desc: "Overview",
        videoId: "4lbsclwXqIo",
      },
      {
        id: "a16",
        title: "Trading Environment",
        desc: "Core",
        videoId: "mNxMB5RaqvQ",
      },
      {
        id: "a17",
        title: "Crypto Capital Preservation",
        desc: "Liveclass",
        videoId: "KJ2j4TswEU",
      },
      {
        id: "a18",
        title: "Hindari Terkena Drawdown Portofolio",
        desc: "Bootcamp",
        videoId: "BAFO31AauK8",
      },
      {
        id: "a19",
        title: "Jangan Pernah Trading Tanpa Stoploss",
        desc: "Overview",
        videoId: "CzJG8kZRLa8",
      },
      {
        id: "a20",
        title: "if Its Too Good To Be True, Then it is To Good",
        desc: "Core",
        videoId: "JitNNRW9KXI",
      },
      {
        id: "a21",
        title: "Search For Market Confluence",
        desc: "Liveclass",
        videoId: "onZ-UNeKN9M",
      },
      {
        id: "a22",
        title: "Jangan Batesin Profit, Tapi Batesin Loss",
        desc: "Bootcamp",
        videoId: "KvOac9o51lE",
      },
      {
        id: "a23",
        title: "Analyst Terbaik Adalah Diri Kalian Sendiri",
        desc: "Overview",
        videoId: "h-zhFOqq3uM",
      },
      {
        id: "a24",
        title: "Exit Strategy 90% Dari Total Trade Kalian",
        desc: "Core",
        videoId: "Vz5ptEziwDU",
      },
      {
        id: "a25",
        title: "Trade Less When Winning",
        desc: "Liveclass",
        videoId: "w8hoL9lrISc",
      },
      {
        id: "a26",
        title: "Selama Ini Lu Salah Pake Trading Journal",
        desc: "Bootcamp",
        videoId: "0Fa8_XRge_Q",
      },
      {
        id: "a27",
        title: "Market Volume Analysis",
        desc: "Overview",
        videoId: "KXOAHbcfcwA",
      },
      {
        id: "a28",
        title: "Sejarah Technical Analysis",
        desc: "Core",
        videoId: "Q5amwoJSe5I",
      },
      {
        id: "a29",
        title: "Apa Itu DOW Theory di Technical Analysis",
        desc: "Liveclass",
        videoId: "WM8zHF4kjTk",
      },
      {
        id: "a30",
        title: "Crypto Trend Guide",
        desc: "Bootcamp",
        videoId: "nYUzrVyyczQ",
      },
      {
        id: "a31",
        title: "Crypto Trend Guide",
        desc: "Overview",
        videoId: "wR2MAMInAXA",
      },
      {
        id: "a32",
        title: "Cara Compare Altcoins Dengan Bitcoin",
        desc: "Core",
        videoId: "Nxm-o2sy4M8",
      },
      {
        id: "a33",
        title: "Crypto Fibbonaci Guide",
        desc: "Core",
        videoId: "xrf79Du0jw8",
      },
      {
        id: "a34",
        title: "Crypto Fibbonaci Guide 2",
        desc: "Core",
        videoId: "dmOutoEjyJQ",
      },
      {
        id: "a35",
        title: "Advanced Fibbonaci Analysis",
        desc: "Core",
        videoId: "GLKfPm1p1Lw",
      },
      {
        id: "a36",
        title: "Onchain Transfer",
        desc: "Core",
        videoId: "-m3Gm14RU6M",
      },
      {
        id: "a37",
        title: "Onchain Transfer 2",
        desc: "Core",
        videoId: "n8J2c9M43I4",
      },
      {
        id: "a38",
        title: "Onchain Transfer 3",
        desc: "Core",
        videoId: "zXBgY-HNA0g",
      },
      {
        id: "a39",
        title: "Bear Market Strategy",
        desc: "Core",
        videoId: "Pg69XOm6-U4",
      },
      {
        id: "a40",
        title: "Exit Strategy",
        desc: "Core",
        videoId: "G_H4NPFATcY",
      },
      {
        id: "a41",
        title: "Private Key & Sed Phrase Mastery",
        desc: "Core",
        videoId: "lxEDebjKzS8",
      },
      {
        id: "a42",
        title: "Phising Scam",
        desc: "Core",
        videoId: "BMXxz70mKmQ",
      },
      {
        id: "a43",
        title: "Smart Contract Risks",
        desc: "Core",
        videoId: "A2jMrw3Qp-U",
      },
      {
        id: "a44",
        title: "Have I Been Pwned",
        desc: "Core",
        videoId: "KlpCrrVQlgA",
      },
      {
        id: "a45",
        title: "Google Security",
        desc: "Core",
        videoId: "AsankTr5h2U",
      },
      {
        id: "a46",
        title: "Fake Airdrop",
        desc: "Core",
        videoId: "tCIqBK5vmd4",
      },
      {
        id: "a47",
        title:
          "Jodski-Cara Dapat Income Tambahan $400 Per Bulan Dari Web3 Jobs",
        desc: "Core",
        videoId: "piAYIC3absg",
      },
      {
        id: "a48",
        title: "Aditya (OKX)-Sharing 4 Tahun Pengalaman Kerja Web3 Jobs",
        desc: "Core",
        videoUrl: "https://youtu.be/2RHQDfznTDo",
      },
      {
        id: "a49",
        title: "Jaymond (ByBit)-Pengalaman Kerja Di ByBit",
        desc: "Core",
        videoUrl: "https://youtu.be/wHfTzBoqS98",
      },
      {
        id: "a50",
        title: "Ferry (Binance)-Pengalaman Kerja Web3 Ex-Binance",
        desc: "Core",
        videoUrl: "https://youtu.be/kHyEsfqJ2wk",
      },
      {
        id: "a51",
        title: "Money Management (Perp Trading",
        desc: "Core",
        videoUrl: "https://youtu.be/KoWjE9ob3a0",
      },
      {
        id: "a52",
        title: "Bahas Geopolitik: Iran vs ISrael, 20 Juni 2025",
        desc: "Core",
        videoUrl: "https://youtu.be/tZ0105MdRyY",
      },
      {
        id: "a53",
        title: "Probability Game",
        desc: "Core",
        videoUrl: "https://youtu.be/wUuaITTK3fQ",
      },
      {
        id: "a54",
        title: "Bahaya Dari Altcoins",
        desc: "Core",
        videoUrl: "https://youtu.be/x_kSUek5UpY",
      },
      {
        id: "a55",
        title: "Apa itu Korelasi?",
        desc: "Core",
        videoUrl: "https://youtu.be/LolU9R6x34w",
      },
      {
        id: "a56",
        title: "Dollar Cost Averaging",
        desc: "Core",
        videoUrl: "https://youtu.be/afX8pTeobZA",
      },
      {
        id: "a57",
        title: "Kenapa Harus Outperform?",
        desc: "Core",
        videoUrl: "https://youtu.be/pgGGQ_i6y-I",
      },
      {
        id: "a58",
        title: "Berapa Duit Harus Dipunyai Untuk Invest Crypto?",
        desc: "Core",
        videoUrl: "https://youtu.be/n2ladIzAD_0",
      },
      {
        id: "a59",
        title: "Live Class: Apakah Bisa Bebas Finansial Lewat Crypto?",
        desc: "Core",
        videoUrl: "https://youtu.be/dQjN0nP-Ng8",
      },
      {
        id: "a60",
        title: "1. Gamblers Fallacy",
        desc: "Core",
        videoUrl: "https://youtu.be/Gg7jP4bIxiY",
      },
      {
        id: "a61",
        title: "2. Confirmation Bias",
        desc: "Core",
        videoUrl: "https://youtu.be/h7qtydmr6LA",
      },
      {
        id: "a62",
        title: "3. Availibilty Heuristhic",
        desc: "Core",
        videoUrl: "https://youtu.be/trliTF50iTI",
      },
      {
        id: "a63",
        title: "Insight Bias",
        desc: "Core",
        videoUrl: "https://youtu.be/URuS7KkUaSM",
      },
      {
        id: "a64",
        title: "1. Apakah Dijamin Profit? ",
        desc: "Core",
        videoUrl: "https://youtu.be/XgCZ5qCTWD4",
      },
      {
        id: "a65",
        title: "2. UTC Bar Close",
        desc: "Core",
        videoUrl: "https://youtu.be/bXNwR6heIYg",
      },
      {
        id: "a66",
        title: "3. Telat Masuk, Apa Solusinya?",
        desc: "Core",
        videoUrl: "https://youtu.be/tuge5Uoc8Pk",
      },
      {
        id: "a67",
        title: "Crypto Liquidity Analysis",
        desc: "Core",
        videoUrl: "https://youtu.be/y3sXpv_9lzI",
      },
      {
        id: "a68",
        title: "Cara Pakai Phantom Wallet",
        desc: "Core",
        videoUrl: "https://youtu.be/gR5pni5YtRY",
      },
      {
        id: "a69",
        title: "Cara Pakai Dexscreener",
        desc: "Core",
        videoUrl: "https://youtu.be/2EL0eW8pzyk",
      },
      {
        id: "a70",
        title: "Apa itu Contract Address",
        desc: "Core",
        videoUrl: "https://youtu.be/H_4oCu24jtc",
      },
      {
        id: "a71",
        title: "Crypto Candlestick Analysis",
        desc: "Core",
        videoUrl: "https://youtu.be/A-9BlhqnmDk",
      },
      {
        id: "a72",
        title: "Crypto Orderblock Analysis",
        desc: "Core",
        videoUrl: "https://youtu.be/Hpagn-dwyjI",
      },
      {
        id: "a73",
        title: "Cara Cari Coin Yang Bisa Naik 10,000%",
        desc: "Core",
        videoUrl: "https://youtu.be/KjVvqYWG-VU",
      },
      {
        id: "a74",
        title: "Liquidity Sweep Analysis",
        desc: "Core",
        videoUrl: "https://youtu.be/YOrn2qMF9Mc",
      },
      {
        id: "a75",
        title: "Market Gap Analysis",
        desc: "Core",
        videoUrl: "https://youtu.be/KPpaJjgMq9g",
      },
      {
        id: "a76",
        title: "Candlestick Pattern Analysis",
        desc: "Core",
        videoUrl: "https://youtu.be/JUxzoV0vtkE",
      },
      {
        id: "a77",
        title: "Trendline Breakout Analysi",
        desc: "Core",
        videoUrl: "https://youtu.be/ouQaDvnbuJE",
      },
      {
        id: "a78",
        title: "Advanced Fibonacci Analysis",
        desc: "Core",
        videoUrl: "https://youtu.be/D3iTcqshvyQ",
      },
      {
        id: "a79",
        title: "Chart Pattern Analysis",
        desc: "Core",
        videoUrl: "https://youtu.be/7Mx_VW5u1sM",
      },
      {
        id: "a80",
        title: "Market Volume Analysis",
        desc: "Core",
        videoUrl: "https://youtu.be/jUfa4BeAyjY",
      },
      {
        id: "a81",
        title: "Orderblock",
        desc: "Core",
        videoUrl: "https://youtu.be/Poq-ZOCexNc",
      },
      {
        id: "a82",
        title: "Relative Strength How to Know Which Coin Is Stronger",
        desc: "Core",
        videoUrl: "https://youtu.be/opHN8d8FKVE",
      },
      {
        id: "a83",
        title: "What to Buy, What To Avoid",
        desc: "Core",
        videoUrl: "https://youtu.be/Xe2Kz6BOwak",
      },
      {
        id: "a84",
        title: "Point of Interest",
        desc: "Core",
        videoUrl: "https://youtu.be/9e40xQGGW9I",
      },
      {
        id: "a85",
        title: "Metamask Guide",
        desc: "Core",
        videoUrl: "https://youtu.be/K3bIudq-xN4",
      },
      {
        id: "a86",
        title: "Bridging Antara Blockchain",
        desc: "Core",
        videoUrl: "https://youtu.be/6rqvB4v536w",
      },
      {
        id: "a87",
        title: "Beli Spot di DEX",
        desc: "Core",
        videoUrl: "https://youtu.be/0Na966zqJfQ",
      },
      {
        id: "a88",
        title: "Dex Tutorial dari 0 Sampai Bisa",
        desc: "Core",
        videoUrl: "https://youtu.be/Cdo48S02HhY",
      },
      {
        id: "a89",
        title: "Member Only Live Replay Sulianto & Quant, 5 Juni 2025",
        desc: "Core",
        videoUrl: "https://youtu.be/RLvC8K-qTeI",
      },
      {
        id: "a90",
        title: "Member Only Live Replay Sulianto, 26 Juni 2025",
        desc: "Core",
        videoUrl: "https://youtu.be/McnmEIY-jWk",
      },
      {
        id: "a91",
        title: "Member Only Live Replay Sulianto, 24 Jul 2025",
        desc: "Core",
        videoUrl: "https://youtu.be/1-6pFZA0aaY",
      },
      {
        id: "a92",
        title: "Member Only Live Replay Sulianto, 31 Jul 2025",
        desc: "Core",
        videoUrl: "https://youtu.be/BMrM57mcsJw",
      },
      {
        id: "a93",
        title: "Member Only Live Replay Sulianto, 15 Agu 2025",
        desc: "Core",
        videoUrl: "https://youtu.be/7nh-7whagDw",
      },
      {
        id: "a94",
        title: "Member Only Live Replay Sulianto, 25 Agu 2025",
        desc: "Core",
        videoUrl: "https://youtu.be/WFAIo7bMJCA",
      },
      {
        id: "a95",
        title: "Live Sulianto, 02 Sep 2025 - Trade With Suli Live",
        desc: "Core",
        videoUrl: "https://youtu.be/amol2PrEuSA",
      },
      {
        id: "a96",
        title: "Live Sulianto, 11 Sep 2025 - Trade With Suli Live",
        desc: "Core",
        videoUrl: "https://youtu.be/QNJ3j_i_QSo",
      },
      {
        id: "a97",
        title: "Live Sulianto, 16 Sep 2025 - Trade With Suli Live",
        desc: "Core",
        videoUrl: "https://youtu.be/gGfATMS-_3g",
      },
      {
        id: "a98",
        title: "Live Sulianto, 24 Sep 2025 - Trade With Suli Live",
        desc: "Core",
        videoUrl: "https://youtu.be/2bnpDcpMuUI",
      },
      {
        id: "a99",
        title: "Live Sulianto, 27 Sep 2025 - Trade With Suli Live",
        desc: "Core",
        videoUrl: "https://youtu.be/SDgg2ISN2WY",
      },
      {
        id: "a100",
        title: "Mean Reverting vs Trending Market",
        desc: "Core",
        videoUrl: "https://youtu.be/qQpNoccPABw",
      },
      {
        id: "a101",
        title: "Apa itu Trending Market",
        desc: "Core",
        videoUrl: "https://youtu.be/eg7eMcAFAO4",
      },
      {
        id: "a102",
        title: "Kenapa Indikator Trend Following Underperform",
        desc: "Core",
        videoUrl: "https://youtu.be/Blp08cPbxec",
      },
      {
        id: "a103",
        title: "Cara Determinasi Market Environment",
        desc: "Core",
        videoUrl: "https://youtu.be/cgFbg5VaQnU",
      },

      {
        id: "a104",
        title: "Cara Melakukan Trend Following (Medium Term)",
        desc: "Core",
        videoUrl: "https://youtu.be/8iMhsTIBEIQ",
      },
      {
        id: "a105",
        title: "Cara Melakukan Trend Following (Long Term)",
        desc: "Core",
        videoUrl: "https://youtu.be/NwRjmbEI7iI",
      },
      {
        id: "a106",
        title: "Cara Set SL-BEP-dan-TP",
        desc: "Core",
        videoUrl: "https://youtu.be/5tWBF6Xzm08",
      },
      {
        id: "a107",
        title: "Auction Market Theory",
        desc: "Core",
        videoUrl: "https://youtu.be/kul8-zuKUeg",
      },
      {
        id: "a108",
        title: "Balance Market vs Imbalance Market",
        desc: "Core",
        videoUrl: "https://youtu.be/BSWPKxw9dWE",
      },
      {
        id: "a109",
        title: "How to Use Market Profile (TPO Chart)",
        desc: "Core",
        videoUrl: "https://youtu.be/5XfLpKB98kg",
      },
      {
        id: "a110",
        title: "How to Use Volume Profile",
        desc: "Core",
        videoUrl: "https://youtu.be/EZAXMx1h7Fg",
      },
      {
        id: "a111",
        title: "VWAP Explained",
        desc: "Core",
        videoUrl: "https://youtu.be/P14Dhw-HNjE",
      },
      {
        id: "a112",
        title: "How to Define Range",
        desc: "Core",
        videoUrl: "https://youtu.be/v56tZTZ1W0s",
      },
      {
        id: "a113",
        title: "Cara Melakukan Trend Following (Medium Term)",
        desc: "Core",
        videoUrl: "https://youtu.be/emMxIhKEk2w",
      },
      {
        id: "a114",
        title: "Cara Melakukan Trend Following (Long Term)",
        desc: "Core",
        videoUrl: "https://youtu.be/Wpt2gQ2bJAI",
      },
      {
        id: "a115",
        title: "Business Cycle",
        desc: "Core",
        videoUrl: "https://youtu.be/l4FAvxAasfA",
      },
      {
        id: "a116",
        title: "Central Banks Vs Private Banks",
        desc: "Core",
        videoUrl: "https://youtu.be/RsCSDxvGJmc",
      },
      {
        id: "a117",
        title: "Quantitative Easing Vs Quantitative Tightening",
        desc: "Core",
        videoUrl: "https://youtu.be/wXn49D0_AwI",
      },
      {
        id: "a118",
        title: "Fed Liquidity",
        desc: "Core",
        videoUrl: "https://youtu.be/MLMqAtj8Qxk",
      },
      {
        id: "a119",
        title: "Bond Market & Volatility",
        desc: "Core",
        videoUrl: "https://youtu.be/dD-S53AG11Y",
      },
      {
        id: "a120",
        title: "How to Trade in Ranging Market",
        desc: "Core",
        videoUrl: "https://youtu.be/DsVraGvKHls",
      },
      {
        id: "a121",
        title: "How to Trade in Trending Market",
        desc: "Core",
        videoUrl: "https://youtu.be/PiV5YQy7kT4",
      },
      {
        id: "a122",
        title: "How to Find Your Edge",
        desc: "Core",
        videoUrl: "https://youtu.be/Dhlb6QAohrg",
      },
      {
        id: "a123",
        title: "Platform Setup (Advance) Tradingview",
        desc: "Core",
        videoUrl: "https://youtu.be/OfmnIvbcrf8",
      },
      {
        id: "a124",
        title: "Platform Setup (Advance) Coinank",
        desc: "Core",
        videoUrl: "https://youtu.be/qseUpfV6FKs",
      },
      {
        id: "a125",
        title: "Time Based Key Levels",
        desc: "Core",
        videoUrl: "https://youtu.be/wr07iJzRg3U",
      },
      {
        id: "a126",
        title: "Monday Range",
        desc: "Core",
        videoUrl: "https://youtu.be/Ze1J74crMpo",
      },
      {
        id: "a127",
        title: "Trading Session",
        desc: "Core",
        videoUrl: "https://youtu.be/xC01dZlaFyY",
      },
      {
        id: "a128",
        title: "Footprint Chart",
        desc: "Core",
        videoUrl: "https://youtu.be/T70bmDqNO3M",
      },
      {
        id: "a129",
        title: "Depth of Market",
        desc: "Core",
        videoUrl: "https://youtu.be/Qxx6AJ9BZu8",
      },
      {
        id: "a130",
        title: "What is CVD",
        desc: "Core",
        videoUrl: "https://youtu.be/NDHbEYeDQhs",
      },
      {
        id: "a131",
        title: "What is OI",
        desc: "Core",
        videoUrl: "https://youtu.be/1Nlov9V_KoE",
      },
      {
        id: "a132",
        title: "What is Liquidations",
        desc: "Core",
        videoUrl: "https://youtu.be/vY_hVHLbsR4",
      },
      {
        id: "a133",
        title: "What is Funding Rates",
        desc: "Core",
        videoUrl: "https://youtu.be/Lp7hAbaM2Ws",
      },
      {
        id: "a134",
        title: "How to Spot Absorption Using Footprint Charts",
        desc: "Core",
        videoUrl: "https://youtu.be/UV04Uzv_74w",
      },
      {
        id: "a135",
        title: "Positions Closing vs Postions Entering",
        desc: "Core",
        videoUrl: "https://youtu.be/6d9j1FnT8Kk",
      },
      {
        id: "a136",
        title: "Order Block Explained",
        desc: "Core",
        videoUrl: "https://youtu.be/QZcanVTz_zs",
      },
      {
        id: "a137",
        title: "Orderbook Depth",
        desc: "Core",
        videoUrl: "https://youtu.be/9FRSRrDMXMc",
      },
      {
        id: "a138",
        title: "How to Use Relative Volume",
        desc: "Core",
        videoUrl: "https://youtu.be/7D3yECiakzo",
      },
      {
        id: "a139",
        title: "Reclaim and Deviation",
        desc: "Core",
        videoUrl: "https://youtu.be/s_XKCjB90Oo",
      },
      {
        id: "a140",
        title: "HVN vs LVN",
        desc: "Core",
        videoUrl: "https://youtu.be/HKjO9YoJdRo",
      },
      {
        id: "a141",
        title: "Outperformance",
        desc: "Core",
        videoUrl: "https://youtu.be/5RVkj_Rhs0E",
      },
      {
        id: "a142",
        title: "Cara Pilih Major Coins",
        desc: "Core",
        videoUrl: "https://youtu.be/934kUa3R5zc",
      },
      {
        id: "a143",
        title: "Timing Altseason",
        desc: "Core",
        videoUrl: "https://youtu.be/PUr5w2l8Hyk",
      },
      {
        id: "a144",
        title: "Altcoin Apa Yang Harus Kita Beli",
        desc: "Core",
        videoUrl: "https://youtu.be/zf78Zq0dGn0",
      },
      {
        id: "a145",
        title: "Anchored VWAP",
        desc: "Core",
        videoUrl: "https://youtu.be/FshNXngfbxU",
      },
      {
        id: "a146",
        title: "Weekly TPO",
        desc: "Core",
        videoUrl: "https://youtu.be/C_CKeIQl0vw",
      },
      {
        id: "a147",
        title: "Composite Volume Profile",
        desc: "Core",
        videoUrl: "https://youtu.be/-JLpk8HU_II",
      },
      {
        id: "a148",
        title: "Composite TPO",
        desc: "Core",
        videoUrl: "https://youtu.be/0_KApR99TF0",
      },
      {
        id: "a149",
        title: "VWAP Rotation",
        desc: "Core",
        videoUrl: "https://youtu.be/En9B2pxmfrQ",
      },
    ],
  },
  {
    sectionId: "level-1",
    title: "Modul Level 0",
    items: [
      {
        id: "l1-1",
        title: "Navigating Through Discord",
        desc: "Analysis",
        videoUrl: "https://youtu.be/j4hKLi--y0M",
      },
      {
        id: "l1-2",
        title: "Risk Management",
        desc: "Analysis",
        videoUrl: "https://youtu.be/hK23bxteEBM",
      },
      {
        id: "l1-3",
        title: "Sunk Cost Fallacy",
        desc: "Analysis",
        videoUrl: "https://youtu.be/JSGuE_zwIs4",
      },
      {
        id: "l1-4",
        title: "Hope Is Not an Investment Strategy",
        desc: "Analysis",
        videoUrl: "https://youtu.be/9M7I39b96Ts",
      },
      {
        id: "l1-5",
        title: "Drawdown",
        desc: "Analysis",
        videoUrl: "https://youtu.be/b5SPJutVZ1E",
      },
      {
        id: "l1-6",
        title: "Istilah-Istilah Teknikal",
        desc: "Analysis",
        videoUrl: "https://youtu.be/i6V5eAjuerk",
      },
      {
        id: "l1-7",
        title:
          "Sesi 1 - Mindset & Dasar-Dasar Keuangan Pribadi - Trade With Suli Modul",
        desc: "Analysis",
        videoUrl: "https://youtu.be/kFc3X2LADH8",
      },
      {
        id: "l1-8",
        title:
          "Sesi 2 - Budgeting and Cash Flow Management - Trade With Suli Modul",
        desc: "Analysis",
        videoUrl: "https://youtu.be/lI7nku_YrUk",
      },
      {
        id: "l1-9",
        title:
          "Sesi 3 - Menabung, Investasi dan Dana Darurat - Trade With Suli Modul",
        desc: "Analysis",
        videoUrl: "https://youtu.be/9Xpq1LyPozs",
      },
      {
        id: "l1-10",
        title: "Sesi 4 - Mengelola Utang dan Gaya Hidup",
        desc: "Analysis",
        videoUrl: "https://youtu.be/v632zVO8ql4",
      },
      {
        id: "l1-11",
        title: "Sesi 5 - Financial Modeling untuk Personal Finance",
        desc: "Analysis",
        videoUrl: "https://youtu.be/XBpxXykc-10",
      },
      {
        id: "l1-12",
        title: "Sesi 6 - Membangun Rencana Keuangan Jangka Panjang",
        desc: "Analysis",
        videoUrl: "https://youtu.be/UEWVIF8zOF0",
      },
      {
        id: "l1-13",
        title: "Webinar Trade With Suli - Prediksi Q4 Arah Bitcoin & Altcoins",
        desc: "Analysis",
        videoUrl: "https://youtu.be/G9ZzeH40c58",
      },
      {
        id: "l1-14",
        title: "Decoding The Crypto Cycle - Trade With Suli Modul",
        desc: "Analysis",
        videoUrl: "https://youtu.be/OQk2XvSzkok",
      },
      {
        id: "l1-15",
        title: "Ethereum Supercycle - Trade With Suli Live",
        desc: "Analysis",
        videoUrl: "https://youtu.be/_tsH5vFR3Bo",
      },
      {
        id: "l1-16",
        title: "Cara Recovery Portofolio Drawdown Start",
        desc: "Analysis",
        videoUrl: "https://youtu.be/Bco_bPJfjjA",
      },
      {
        id: "l1-17",
        title: "Bitcoin Zero Sum?",
        desc: "Analysis",
        videoUrl: "https://youtu.be/x2g9HEdAN78",
      },
      {
        id: "l1-18",
        title: "01. Fundamental Crypto Coins",
        desc: "Analysis",
        videoUrl: "https://youtu.be/c3jpXINn4p8",
      },
      {
        id: "l1-19",
        title: "02. Crypto Screening",
        desc: "Analysis",
        videoUrl: "https://youtu.be/Q3bz4qxuPbA",
      },
      {
        id: "l1-20",
        title: "01. Pakai exchange apa",
        desc: "Analysis",
        videoUrl: "https://youtu.be/RmRdhFAf-8M",
      },
      {
        id: "l1-21",
        title: "02. Cari Koin Crypto",
        desc: "Analysis",
        videoUrl: "https://youtu.be/0Kht6b7Etvs",
      },
      {
        id: "l1-22",
        title: "03. Beli Posisi Spot di CEX",
        desc: "Analysis",
        videoUrl: "https://youtu.be/DnUXemS5llI",
      },
      {
        id: "l1-23",
        title: "01. Apa Itu Lavarage",
        desc: "Analysis",
        videoUrl: "https://youtu.be/DVtxMw1mw-E",
      },
      {
        id: "l1-24",
        title: "02. Margin Type",
        desc: "Analysis",
        videoUrl: "https://youtu.be/O__s7T1QJ7E",
      },
      {
        id: "l1-25",
        title: "01. Charting Software Part 1",
        desc: "Analysis",
        videoUrl: "https://youtu.be/tSSiZ_JTc4E",
      },
      {
        id: "l1-26",
        title: "02. Charting Software Part 2",
        desc: "Analysis",
        videoUrl: "https://youtu.be/_jMlGpww9bs",
      },
      {
        id: "l1-27",
        title: "02. Charting Software Part 3",
        desc: "Analysis",
        videoUrl: "https://youtu.be/gn1SI-i4Mkw",
      },
      {
        id: "l1-28",
        title: "Apakah Harus Diversifikasi",
        desc: "Analysis",
        videoUrl: "https://youtu.be/OL6_x63yH6I",
      },
      {
        id: "l1-29",
        title: "FAQ and Mind Management",
        desc: "Analysis",
        videoUrl: "https://youtu.be/gExYBVOsWgM",
      },
      {
        id: "l1-30",
        title: "Order Type",
        desc: "Analysis",
        videoUrl: "https://youtu.be/5Eb9B8dM6k8",
      },
      {
        id: "l1-31",
        title: "Introduction to Web 3 Jobs",
        desc: "Analysis",
        videoUrl: "https://youtu.be/oYvNeYBLYCM",
      },

      {
        id: "l1-32",
        title: "Apakah Kamu Cocok Untuk Web 3 Jobs",
        desc: "Analysis",
        videoUrl: "https://youtu.be/CRV-BJgasFY",
      },
      {
        id: "l1-33",
        title: "Kenapa Web 3 Jobs",
        desc: "Analysis",
        videoUrl: "https://youtu.be/pXMwyucWHtw",
      },
      {
        id: "l1-34",
        title: "Zero To Hero Web3 Jobs",
        desc: "Analysis",
        videoUrl: "https://youtu.be/TME8XUqbisQ",
      },
      {
        id: "l1-35",
        title: "Zero To Hero Web3 Jobs",
        desc: "Analysis",
        videoUrl: "https://youtu.be/TME8XUqbisQ",
      },
    ],
  },
];

export default function Page() {
  const [unlocked, setUnlocked] = useState(false);
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("access") === "granted") setUnlocked(true);
  }, []);

  async function handleUnlock() {
    setError("");
    try {
      const h = await sha256(pw);
      if (h === correctHash) {
        localStorage.setItem("access", "granted");
        setUnlocked(true);
        setPw("");
      } else {
        setError("Password salah");
      }
    } catch (e) {
      setError("Error hashing");
    }
  }

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900/80 to-slate-900/80 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold tracking-tight">
            New & For You
          </h1>
          <div className="flex items-center gap-4">
            <input
              className="hidden sm:block px-3 py-2 rounded-md bg-slate-800/60 placeholder-gray-400 text-sm"
              placeholder="Search"
            />
            <div className="text-sm text-slate-400">Modul Suli</div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {!unlocked ? (
          <div className="max-w-xl mx-auto bg-slate-900/60 border border-slate-800 rounded-xl p-8 shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Masukkan Password</h2>
            <input
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              type="password"
              placeholder="Password..."
              className="w-full px-4 py-3 rounded-md bg-slate-800/50 placeholder-gray-400 focus:outline-none"
            />
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={handleUnlock}
                className="px-4 py-2 bg-indigo-600 rounded-md"
              >
                Masuk
              </button>
              <button
                onClick={() => {
                  setPw("");
                  setError("");
                }}
                className="px-4 py-2 border rounded-md"
              >
                Reset
              </button>
            </div>
            {error && <p className="text-red-400 mt-3">{error}</p>}
            <p className="text-sm text-slate-400 mt-4">
              Password bersifat case-sensitive.
            </p>
          </div>
        ) : (
          <ClassGrid modulesData={modulesData} />
        )}
      </main>
    </div>
  );
}
