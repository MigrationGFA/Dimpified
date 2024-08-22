import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Modal,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SizeSelect } from "../../../Components/elements/form-select/SizeSelect";
import pricingData from "./PricingData";
import EcoHeader from "./ecoHeader";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import axios from "axios";
import { useSelector } from "react-redux";
import { usePaystackPayment } from "react-paystack";
import { PaystackButton } from "react-paystack";
import Paystack from "@paystack/inline-js";
import { showToast } from "../../../Components/Showtoast";

// import FAQsData from "./FAQsData";

import { FaCheck, FaTimes } from "react-icons/fa";

const options = [
  { value: "1-500", label: "1 - 500" },
  { value: "501-1000", label: "501 - 1,000" },
  { value: "1001-1500", label: "1,001 - 1,500" },
  { value: "1501-2000", label: "1,501 - 2,000" },
  { value: "2001-2500", label: "2,001 - 2,500" },
  { value: "2501-3000", label: "2,501 - 3,000" },
  { value: "3001-4000", label: "3,001 - 4,000" },
  { value: "4001-5000", label: "4,001 - 5,000" },
  { value: "5001-6000", label: "5,001 - 6,000" },
  { value: "6001-7000", label: "6,001 - 7,000" },
  { value: "7001-8000", label: "7,001 - 8,000" },
  { value: "8001-9000", label: "8,001 - 9,000" },
  { value: "9001-10000", label: "9,001 - 10,000" },
  { value: "10001-12000", label: "10,001 - 12,000" },
  { value: "12001-14000", label: "12,001 - 14,000" },
  { value: "14001-16000", label: "14,001 - 16,000" },
  { value: "16001-18000", label: "16,001 - 18,000" },
  { value: "18001-20000", label: "18,001 - 20,000" },
  { value: "20001-25000", label: "20,001 - 25,000" },
  { value: "25001-30000", label: "25,001 - 30,000" },
  { value: "30001-35000", label: "30,001 - 35,000" },
  { value: "35001-40000", label: "35,001 - 40,000" },
  { value: "40001-45000", label: "40,001 - 45,000" },
  { value: "45001-50000", label: "45,001 - 50,000" },
  { value: "50001-60000", label: "50,001 - 60,000" },
  { value: "60001-70000", label: "60,001 - 70,000" },
  { value: "70001-80000", label: "70,001 - 80,000" },
  { value: "80001-90000", label: "80,001 - 90,000" },
  { value: "90001-100000", label: "90,001 - 100,000" },
  { value: "100001-125000", label: "100,001 - 125,000" },
  { value: "125001-150000", label: "125,001 - 150,000" },
  { value: "150001-175000", label: "150,001 - 175,000" },
  { value: "175001-200000", label: "175,001 - 200,000" },
  { value: "200001-225000", label: "200,001 - 225,000" },
  { value: "225001-250000", label: "225,001 - 250,000" },
  { value: "250001-300000", label: "250,001 - 300,000" },
  { value: "300001-350000", label: "300,001 - 350,000" },
  { value: "350001-400000", label: "350,001 - 400,000" },
  { value: "400001-450000", label: "400,001 - 450,000" },
  { value: "450001-500000", label: "450,001 - 500,000" },
  { value: "500001-600000", label: "500,001 - 600,000" },
  { value: "600001-700000", label: "600,001 - 700,000" },
  { value: "700001-800000", label: "700,001 - 800,000" },
  { value: "800001-900000", label: "800,001 - 900,000" },
  { value: "900001-1000000", label: "900,001 - 1,000,000" },
  { value: "1000001-1250000", label: "1,000,001 - 1,250,000" },
  { value: "1250001-1500000", label: "1,250,001 - 1,500,000" },
  { value: "1500001-1750000", label: "1,500,001 - 1,750,000" },
  { value: "1750001-2000000", label: "1,750,001 - 2,000,000" },
  { value: "2000001-2500000", label: "2,000,001 - 2,500,000" },
  { value: "2500001-3000000", label: "2,500,001 - 3,000,000" },
  { value: "3000001-3500000", label: "3,000,001 - 3,500,000" },
  { value: "3500001-4000000", label: "3,500,001 - 4,000,000" },
  { value: "4000001-4500000", label: "4,000,001 - 4,500,000" },
  { value: "4500001-5000000", label: "4,500,001 - 5,000,000" },
];

const paymentPlanCodes = {
  Plus: {
    "1-500": {
      Monthly: "PLN_acloww6qnhl60nq",
      "6 Months": "PLN_dfipz485byliypd",
      Annual: "PLN_js5rjajuekug00x",
    },
    "501-1000": {
      Monthly: "PLN_ze99x0mfj5dxipl",
      "6 Months": "PLN_v7jgq7q4cfo1wim",
      Annual: "PLN_gs91wemqzw6jcqu",
    },
    "1001-1500": {
      Monthly: "PLN_6icvb7xg0xo16et",
      "6 Months": "PLN_2yd6g76c7yu19d1",
      Annual: "PLN_blg7gja8l3gtgvk",
    },
    "1501-2000": {
      Monthly: "PLN_ayb7v1epaq067nm",
      "6 Months": "PLN_92h1s57qgdne85m",
      Annual: "PLN_a1106u0tbtwqv5l",
    },
    "2001-2500": {
      Monthly: "PLN_jbp7m19nvf4dd4u",
      "6 Months": "PLN_fi6dt9k530lmhiz",
      Annual: "PLN_y1bpkv921qm9y44",
    },
    "2501-3000": {
      Monthly: "PLN_3zk3nafllbhpa1b",
      "6 Months": "PLN_2sa1k1uo897voo3",
      Annual: "PLN_gonn6olmzbp3vk2",
    },
    "3001-4000": {
      Monthly: "PLN_lsi213it4v1gwql",
      "6 Months": "PLN_hcrfagoeecue8m2",
      Annual: "PLN_66rz8orv7lhf955",
    },
    "4001-5000": {
      Monthly: "PLN_c5mrk1k4i6zt059",
      "6 Months": "PLN_44q8bwqaqnx6f0g",
      Annual: "PLN_m53ht827vskg8hi",
    },
    "5001-6000": {
      Monthly: "PLN_s5pe90deho5iod1",
      "6 Months": "PLN_iwevockyloztch4",
      Annual: "PLN_g69dbfutk1xcp8d",
    },
    "6001-7000": {
      Monthly: "PLN_sfpo4q5sdk8de8c",
      "6 Months": "PLN_gddjfi1ps0gegx7",
      Annual: " PLN_bj82wx9vy2zrtop",
    },
    "7001-8000": {
      Monthly: "PLN_el5kwh6yvaqm27h",
      "6 Months": "PLN_bjgns1uhy07e2cx",
      Annual: "PLN_hh82himsepuq8b7",
    },
    "8001-9000": {
      Monthly: "PLN_iwca48gq64kz0z6",
      "6 Months": "PLN_z9lorcc73vq63ba",
      Annual: "PLN_n72upk8dpqhx1mx",
    },
    "9001-10000": {
      Monthly: "PLN_j7m4cvkm5jym131",
      "6 Months": "PLN_ani5mv4xwifaxny",
      Annual: "PLN_a7j8rit0fdwtyme",
    },
    "10001-12000": {
      Monthly: "PLN_vcpubtiwrgnx339",
      "6 Months": "PLN_lllh1ngfqk5a0r8",
      Annual: "PLN_8ysey4wrryqoyp0",
    },
    "12001-14000": {
      Monthly: "PLN_9lnn5ket8ej517k",
      "6 Months": "PLN_2paths62b4ses8l",
      Annual: "PLN_srqtp2qhfhikvuz",
    },
    "14001-16000": {
      Monthly: "PLN_tfe5h3x0eyhdcsw",
      "6 Months": "PLN_r6d5v72j6p1qp4h",
      Annual: "PLN_mih3hkkjikaolnz",
    },
    "16001-18000": {
      Monthly: "PLN_5mlkae4cgontipr",
      "6 Months": "PLN_polvcy0ftu59aqg",
      Annual: "PLN_jvikt09234355rv",
    },
    "18001-20000": {
      Monthly: "PLN_nwzty3loqg5n4wd",
      "6 Months": "PLN_kc1ic1k54nl29wv",
      Annual: "PLN_i6lrtv1a31f6n9x",
    },
    "20001-25000": {
      Monthly: "PLN_b2y8qomrqq127wj",
      "6 Months": "PLN_aqyo30jyn3zi0dw",
      Annual: "PLN_37ra7rc0pl72abq",
    },
    "25001-30000": {
      Monthly: "PLN_eh62gmqwxsf2ott",
      "6 Months": "PLN_7yz2idxiw7ag3up",
      Annual: "PLN_bwrdmvogpbcn6ii",
    },
    "30001-35000": {
      Monthly: "PLN_zuemu8r6uywsehn",
      "6 Months": "PLN_eq7z8wve9nhypp6",
      Annual: "PLN_wikjzu0tilc4jxp",
    },
    "35001-40000": {
      Monthly: "PLN_mrznubehhvbhxi9",
      "6 Months": "PLN_e8nw39d42m4txz8",
      Annual: "PLN_271bidqbb04916j",
    },
    "40001-45000": {
      Monthly: "PLN_34h31rp237uihyv",
      "6 Months": "PLN_uvoulnz9vtye521",
      Annual: "PLN_v3cn2hl0tbdb6od",
    },
    "45001-50000": {
      Monthly: "PLN_dpop4m5rrfwrpfo",
      "6 Months": "PLN_kyht9b207mvapfn",
      Annual: "PLN_57mbsjqkcjczhlr",
    },
    "50001-60000": {
      Monthly: "PLN_r1d575ek9orl6rp",
      "6 Months": "PLN_sbhqwbnegm3guz5",
      Annual: "PLN_di2ndftdrfhzqvt",
    },
    "60001-70000": {
      Monthly: "PLN_x5goay09dzvsgjy",
      "6 Months": "PLN_4fsr0lvjnwwg1e8",
      Annual: "PLN_q2hszrgxq3z6qtv",
    },
    "70001-80000": {
      Monthly: "PLN_897aknz1atrhzni",
      "6 Months": "PLN_k7zheky632tuv4a",
      Annual: "PLN_jo4u6p4xp8ojicx",
    },
    "80001-90000": {
      Monthly: "PLN_73ngknwjqtbdktg",
      "6 Months": "PLN_nwfqyl1o3c7c7bq",
      Annual: "PLN_hol9pvukzr3uajx",
    },
    "90001-100000": {
      Monthly: "PLN_orc158ayvej2qyw",
      "6 Months": "PLN_fif5s37o4uegm80",
      Annual: "PLN_ck6qtmed16jlnt4",
    },
    "100001-125000": {
      Monthly: "PLN_clt5vgy0y072mlk",
      "6 Months": "PLN_4d1ifttg98ona63",
      Annual: "PLN_8qt2vfcvl2dwmh2",
    },
    "125001-150000": {
      Monthly: "PLN_nu8wou557c75as8",
      "6 Months": "PLN_njodnzeq4v5f607",
      Annual: "PLN_zdojnkj48a5788q",
    },
    "150001-175000": {
      Monthly: "PLN_8sy01z0mry0s0f0",
      "6 Months": "PLN_foy1nycqo1qx3yo",
      Annual: "PLN_ar4su3g45lrgonc",
    },
    "175001-200000": {
      Monthly: "PLN_5cb9rtapjrjq2su",
      "6 Months": "PLN_8kklnfuua0tlgp8",
      Annual: "PLN_z49ghoca0te4utz",
    },
    "200001-225000": {
      Monthly: "PLN_j7u9tupaf4o19u7",
      "6 Months": "PLN_pklk2zyn9566x2g",
      Annual: "PLN_mgn296vnxwa4cht",
    },
    "225001-250000": {
      Monthly: "PLN_5f76n7onl6pfzxd",
      "6 Months": "PLN_jyfp1wx5m3igsly",
      Annual: "PLN_nz1p5y0fqyu1gne",
    },
    "250001-300000": {
      Monthly: "PLN_xeof8a5et1igtv7",
      "6 Months": "PLN_p305nj6hil4ydja",
      Annual: "PLN_q8rrm88lieiwhxe",
    },
    "300001-350000": {
      Monthly: "PLN_65me71gveb0laem",
      "6 Months": "PLN_6pken7cyd11qnb7",
      Annual: "PLN_h7kgipttfvbs8o4",
    },
    "350001-400000": {
      Monthly: "PLN_1yi02n09wfvizpq",
      "6 Months": "PLN_6ceejf9ql250wwj",
      Annual: "PLN_fv5jan5fi6vbwx1",
    },
    "400001-450000": {
      Monthly: "PLN_8c99nwjit0l3n6r",
      "6 Months": "PLN_hf64cpzav48xdg7",
      Annual: "PLN_35ihmwh53zh37t8",
    },
    "450001-500000": {
      Monthly: "PLN_oo9ua9kjr9uzi80",
      "6 Months": "PLN_py962l4hflijm5u",
      Annual: "PLN_mx3sh80gdd2wiz5",
    },
    "500001-600000": {
      Monthly: "PLN_qgq7yf3j6z040y1",
      "6 Months": "PLN_ctulna39l26kdzw",
      Annual: "PLN_llxojaalnmv2o1r",
    },
    "600001-700000": {
      Monthly: "PLN_671ud3syshrayeo",
      "6 Months": "PLN_r0pybhz85m5i9n8",
      Annual: "PLN_txy1e5ajhouzkqc",
    },
    "700001-800000": {
      Monthly: "PLN_7n1jm7sgq8pks7t",
      "6 Months": "PLN_ctgoxtd75mlqh16",
      Annual: "PLN_a15kfbeiwhm3b08",
    },
    "800001-900000": {
      Monthly: "PLN_ljbj00vk8new9nt",
      "6 Months": "PLN_i0yb5rh39l6tx64",
      Annual: "PLN_uwy8a059mry9m30",
    },
    "900001-1000000": {
      Monthly: "PLN_a7agzs19ogeskfz",
      "6 Months": "PLN_n585kh1dxbvpy4q",
      Annual: "PLN_a13gx1fzo55hpn9",
    },
    "1000001-1250000": {
      Monthly: "PLN_u6ku7oralackjqx",
      "6 Months": "PLN_4b5dlr5ngwv16se",
      Annual: "PLN_nrklxrqgddnmcuk",
    },
    "1250001-1500000": {
      Monthly: "PLN_wpzahrglz4gnf4n",
      "6 Months": "PLN_obk0wbaz56c0c48",
      Annual: "PLN_shpx9ydsgr83jw1",
    },
    "1500001-1750000": {
      Monthly: "PLN_9ni487bptk50n4y",
      "6 Months": "PLN_yexuegkq0g4209y",
      Annual: "PLN_53unjgco3m9n3wx",
    },
    "1750001-2000000": {
      Monthly: "PLN_gza97dwxpgny7uf",
      "6 Months": "PLN_0vw33piqlbzc5hf",
      Annual: "PLN_d6wx9lxny70dw6l",
    },
    "2000001-2500000": {
      Monthly: "PLN_clages0ujlh5asp",
      "6 Months": "PLN_0gshweoowlipma9",
      Annual: "PLN_3jst4dkq0w7u64x",
    },
    "2500001-3000000": {
      Monthly: "PLN_yfvlr4c6od0fgiq",
      "6 Months": "PLN_yr6oxc059pqmb03",
      Annual: "PLN_c4lczbuov481c8l",
    },
    "3000001-3500000": {
      Monthly: "PLN_9c7cs3ybc18s3ni",
      "6 Months": "PLN_nvewm6klmjdtoz5",
      Annual: "PLN_nc2d4qcrolchxub",
    },
    "3500001-4000000": {
      Monthly: "PLN_aqs8rb9e8hw0erh",
      "6 Months": "PLN_l219trh3r8u2msu",
      Annual: "PLN_26ajbgcur64dgl9",
    },
    "4000001-4500000": {
      Monthly: "PLN_nnuvulbnsa0qdiv",
      "6 Months": "PLN_omnfryn88ho2kwp",
      Annual: "PLN_irovoumr37mstau",
    },
    "4500001-5000000": {
      Monthly: "PLN_zo8gkngz7c5kdmo",
      "6 Months": "PLN_54b4lqyi5bpyylo",
      Annual: "PLN_pc9s4w7oj5op1hl",
    },
  },

  Pro: {
    "1-500": {
      Monthly: "PLN_hkzv2niem6ufkb7",
      "6 Months": "PLN_e4srw3wol7l1ei7",
      Annual: "PLN_pppvfpkxgw1dhky",
    },
    "501-1000": {
      Monthly: "PLN_9vq493soo2obfb8",
      "6 Months": "PLN_uh0sl798mgxhhe6",
      Annual: "PLN_gp9i9d08p64jjge",
    },
    "1001-1500": {
      Monthly: "PLN_fx2hfv222mt7non",
      "6 Months": "PLN_gubliczcc6794sq",
      Annual: "PLN_bxl6ftzy08q6ss5",
    },
    "1501-2000": {
      Monthly: "PLN_9cxn7j6qwybg0y1",
      "6 Months": "PLN_r83ql7mdbgsvds2",
      Annual: "PLN_am5k66c1a08vd7h",
    },
    "2001-2500": {
      Monthly: "PLN_a7j8m50mndeywai",
      "6 Months": " PLN_8wib4lfr5wlov3d",
      Annual: "PLN_x2irsz4kvnlm36n",
    },
    "2501-3000": {
      Monthly: "PLN_dj3cw29s1mwpv1s",
      "6 Months": "PLN_m13ykniyenp5f6h",
      Annual: "PLN_0wx7hcbvh6ddhtt",
    },
    "3001-4000": {
      Monthly: "PLN_k5rae1ci1mmy813",
      "6 Months": "PLN_zbquozfu4e5vykt",
      Annual: "PLN_nkiezzh8k6md5nr",
    },
    "4001-5000": {
      Monthly: "PLN_5nf0gahm43c6qcj",
      "6 Months": "PLN_sr465s0ol9qylnp",
      Annual: "PLN_3kkqnl25lqtdgx2",
    },
    "5001-6000": {
      Monthly: "PLN_c52296u0c5po34j",
      "6 Months": "PLN_b8xmcek1zwdzqik",
      Annual: "PLN_84y38m100f49v50",
    },
    "6001-7000": {
      Monthly: "PLN_yegibtvpinz6apf",
      "6 Months": "PLN_0auzt2q55obewqt",
      Annual: "PLN_2eqeaal7l64gtc1",
    },
    "7001-8000": {
      Monthly: "PLN_fslf7yetwb6956c",
      "6 Months": "PLN_rjydss83fn79899",
      Annual: "PLN_ghk6m5p2vebdyzx",
    },
    "8001-9000": {
      Monthly: "PLN_zdh3ty25ksqkd6l",
      "6 Months": "PLN_wwi6cyad9qy0846",
      Annual: "PLN_usppkgr0qzhq1re",
    },
    "9001-10000": {
      Monthly: "PLN_pyej6uvo585hpez",
      "6 Months": "PLN_pa66d03pe9lxncn",
      Annual: "PLN_34bp8b9625e08rb",
    },
    "10001-12000": {
      Monthly: "PLN_ow0uttf75i8yany",
      "6 Months": "PLN_2xrtby94cyap97w",
      Annual: "PLN_gqglp29otmlw2jy",
    },
    "12001-14000": {
      Monthly: "PLN_0z4a36zuujcg84z",
      "6 Months": "PLN_29bk5klbd9g1p0i",
      Annual: "PLN_9grfu3crqqr877k",
    },
    "14001-16000": {
      Monthly: "PLN_qzgj1sppr64t2ze",
      "6 Months": "PLN_p7q3ptu8td62fv0",
      Annual: "PLN_8m67xlq6dof5usn",
    },
    "16001-18000": {
      Monthly: "PLN_w4ulm4bfvsmzh34",
      "6 Months": "PLN_sb1ddkw0wqlnjh3",
      Annual: "PLN_u667d2qw8egggur",
    },
    "18001-20000": {
      Monthly: "PLN_146qk65vxoym09o",
      "6 Months": "PLN_s5zqbc933xlzb7k",
      Annual: "PLN_lc02cqgu1mizqhq",
    },
    "20001-25000": {
      Monthly: "PLN_0kb79fw5vsv18dj",
      "6 Months": "PLN_3lowiwbltuncz4p",
      Annual: "PLN_jc2u3h95monel3e",
    },
    "25001-30000": {
      Monthly: "PLN_ahhovwt316w1y4r",
      "6 Months": "PLN_hs3bfq758095efz",
      Annual: "PLN_tu6gwnjg7j9vvmo",
    },
    "30001-35000": {
      Monthly: "PLN_i9z4tjhtskyfsp0",
      "6 Months": "PLN_r4jegk5xioplu9l",
      Annual: "PLN_mj8hg3nhpdaxhsn",
    },
    "35001-40000": {
      Monthly: "PLN_yriwsbdyq4rdynr",
      "6 Months": "PLN_ttwqvx7t6e5cnw7",
      Annual: "PLN_sw4il2mgsuodlqw",
    },
    "40001-45000": {
      Monthly: "PLN_umy4x3mto8r4tkt",
      "6 Months": "PLN_sk2ktc2w3xs2fyg",
      Annual: "PLN_afn20huiw2frj7z",
    },
    "45001-50000": {
      Monthly: "PLN_wifjgykb79mldn8",
      "6 Months": " PLN_1zexy0dtevs23q7",
      Annual: "PLN_x2373e50a4sq2uo",
    },
    "50001-60000": {
      Monthly: "PLN_tpqj81yc8l7ncih",
      "6 Months": "PLN_mq16if3qt581c85",
      Annual: "PLN_1glzhbgb4ngvmqa",
    },
    "60001-70000": {
      Monthly: "PLN_kvcxyzbxz8v63h1",
      "6 Months": "PLN_j0qulfwxetxarqg",
      Annual: "PLN_wb6osbk3t3tveen",
    },
    "70001-80000": {
      Monthly: "PLN_fhyxc3tb47q851k",
      "6 Months": "PLN_cwmur4gkrn1xz9y",
      Annual: "PLN_ccx1r6th7ntp6f0",
    },
    "80001-90000": {
      Monthly: "PLN_qqv7j30td62e7up",
      "6 Months": "PLN_uttf6i6jbqzqofc",
      Annual: "PLN_lnnhbbjhpqrznve",
    },
    "90001-100000": {
      Monthly: "PLN_cvozst7g78cvztl",
      "6 Months": "PLN_l2clvjqpp9yc83y",
      Annual: "PLN_ihp08tstkklzyga",
    },
    "100001-125000": {
      Monthly: "PLN_a1dy4ywp5f005h3",
      "6 Months": "PLN_3jr41vbwnywzuij",
      Annual: "PLN_rtepogdqeebxml7",
    },
    "125001-150000": {
      Monthly: "PLN_wotnn0jlaae6dob",
      "6 Months": "PLN_3c5e2ecbow30niw",
      Annual: "PLN_xqm23qs5owh657d",
    },
    "150001-175000": {
      Monthly: "PLN_8qu8jfjj953dcib",
      "6 Months": "PLN_bzo5rrc3em5gr7l",
      Annual: "PLN_6gtkd39hzo4c4oq",
    },
    "175001-200000": {
      Monthly: "PLN_xdqfj398p197e2f",
      "6 Months": "PLN_4qhwyprc8dyaqbn",
      Annual: "PLN_m3tyyfujjuw3q18",
    },
    "200001-225000": {
      Monthly: "PLN_3t9djdhy4uwcdwu",
      "6 Months": "PLN_oo7hrtue0fol1mo",
      Annual: "PLN_z4tvelexn47hoh8",
    },
    "225001-250000": {
      Monthly: "PLN_jac1rl8jx2syh59",
      "6 Months": "PLN_3jcn19gs2b3di7d",
      Annual: "PLN_um79itdrirjy9k6",
    },
    "250001-300000": {
      Monthly: "PLN_ijsgwkh28pgb06h",
      "6 Months": "PLN_qj6ynwtxb959vvg",
      Annual: "PLN_w3t2iv1lcp3p1dv",
    },
    "300001-350000": {
      Monthly: "PLN_9hm14jz3d6a4zuk",
      "6 Months": "PLN_35iygxcn3fp50ws",
      Annual: "PLN_eex262ygvvfttxe",
    },
    "350001-400000": {
      Monthly: "PLN_avxcldpe3egfj4u",
      "6 Months": "PLN_103fc8bttcl0nkc",
      Annual: "PLN_ultgslc72oqcqyu",
    },
    "400001-450000": {
      Monthly: "PLN_aswtvb0oqsgnml7",
      "6 Months": "PLN_wa43bfg05cxpm5a",
      Annual: "PLN_efqxv5gr4bsigrl",
    },
    "450001-500000": {
      Monthly: "PLN_renonher3uyz2dd",
      "6 Months": "PLN_cfplfy09f92dyl1",
      Annual: "PLN_8emlfc8sk9xnmam",
    },
    "500001-600000": {
      Monthly: "PLN_rta4ewpo04rzxvf",
      "6 Months": "PLN_l7h8alwa0iaqx19",
      Annual: "PLN_ppcbyj7fwpcu7vc",
    },
    "600001-700000": {
      Monthly: "PLN_fwjmotn27k99nqv",
      "6 Months": "PLN_h9e5p81huphxdhs",
      Annual: "PLN_i5md2l371vmvxtz",
    },
    "700001-800000": {
      Monthly: "PLN_vmxaq3732b5623a",
      "6 Months": "PLN_a4y7nlf8zku830a",
      Annual: "PLN_iyvtyak15ahk01h",
    },
    "800001-900000": {
      Monthly: "PLN_viome3fficohnyl",
      "6 Months": "PLN_uhogrpj3koz9aen",
      Annual: "PLN_5bqgfbzdpqy9a29",
    },
    "900001-1000000": {
      Monthly: "PLN_3aeyenrsnfcuwut",
      "6 Months": "PLN_a0wdfvswrkttfe4",
      Annual: "PLN_dw9ma6h9hcy6sez",
    },
    "1000001-1250000": {
      Monthly: "PLN_m9p6t7gdq6qpq66",
      "6 Months": "PLN_btjcr9ba6kkuts3",
      Annual: "PLN_2wea3v9ab8nne0b",
    },
    "1250001-1500000": {
      Monthly: "PLN_lvj5vc3j0dixbvb",
      "6 Months": "PLN_8n8s5mq15bx63ju",
      Annual: "PLN_ofuzvvcpd1awpyl",
    },
    "1500001-1750000": {
      Monthly: "PLN_iny6tuidtiyo75s",
      "6 Months": "PLN_nsszioez313rhcb",
      Annual: "PLN_0teol2awc628d4o",
    },
    "1750001-2000000": {
      Monthly: "PLN_vkouzm72x9gp0s7",
      "6 Months": "PLN_ea7et1mtd0jchdq",
      Annual: "PLN_ox7lh97f1frp4zz",
    },
    "2000001-2500000": {
      Monthly: "PLN_w9vcocqzidomeam",
      "6 Months": "PLN_br98evpntxxn62e",
      Annual: "PLN_rcds3q3on417tmr",
    },
    "2500001-3000000": {
      Monthly: "PLN_qr6f85viwxprf1z",
      "6 Months": "PLN_b1bc9ws8e50dj84",
      Annual: "PLN_nkxawl9zc9drbpl",
    },
    "3000001-3500000": {
      Monthly: "PLN_dtvcqzi90rgdv0s",
      "6 Months": "8PLN_dmmciamele22kp8",
      Annual: "PLN_km5ha4zwp7o1awo",
    },
    "3500001-4000000": {
      Monthly: "PLN_fm3wa05uo7kaqxg",
      "6 Months": "PLN_4hfrs7abl117les",
      Annual: "PLN_0szch3b7gdemn5t",
    },
    "4000001-4500000": {
      Monthly: "PLN_timum2a9wt53w2e",
      "6 Months": "PLN_7ft6vl0sxcm4um4",
      Annual: "PLN_1a12lv7eixjyhgn",
    },
    "4500001-5000000": {
      Monthly: "PLN_e9zh39d3vvtclwo",
      "6 Months": "PLN_pxjjenhqobeow5a",
      Annual: "PLN_q348sh445nupqsz",
    },
  },

  Extra: {
    "1-500": {
      Monthly: "PLN_hwn8ultyhtx208u",
      "6 Months": "PLN_ruiheo9ce59zppy",
      Annual: "PLN_qfpuftzg00o918i",
    },
    "501-1000": {
      Monthly: "PLN_df7h6yhk9h2aw0a",
      "6 Months": "PLN_7cfl2pqpkd14g5r",
      Annual: "PLN_186i918sy7pa8gy",
    },
    "1001-1500": {
      Monthly: "PLN_asv0anabujkhqip",
      "6 Months": "PLN_2twpkc52n5y58zi",
      Annual: "PLN_83wogvvmviojnc8",
    },
    "1501-2000": {
      Monthly: "PLN_5miq6s5p7xrqouo",
      "6 Months": "PLN_pcsy26swdlir5jv",
      Annual: "PLN_rmt4n9zc8tv8upm",
    },
    "2001-2500": {
      Monthly: "PLN_eanqw1dh10h589c",
      "6 Months": "PLN_w8uf3rpbkes7wtp",
      Annual: "PLN_adkb48w6bon7rsk",
    },
    "2501-3000": {
      Monthly: "PLN_lydij9nl0lq22r3",
      "6 Months": "PLN_h4o98tfgaxq4ytl",
      Annual: "PLN_be8mnuhqdm0q385",
    },
    "3001-4000": {
      Monthly: "PLN_xnyk2wh0yl43mxz",
      "6 Months": "PLN_5yvrzyrsq5ax5aw",
      Annual: "PLN_8su7ip2rzb7pxl2",
    },
    "4001-5000": {
      Monthly: "PLN_w9e7imvdfis3yqo",
      "6 Months": "PLN_hwhx6r2022747jt",
      Annual: "PLN_iik3l5tivpcl4k1",
    },
    "5001-6000": {
      Monthly: "PLN_1oyuz4fs2ludvpr",
      "6 Months": "PLN_f2pnelh2zp53vsa",
      Annual: "PLN_2nf30ap7opyyz2u",
    },
    "6001-7000": {
      Monthly: "PLN_osrv40g0dni3qex",
      "6 Months": "PLN_d5wtyrr6eh4cqtz",
      Annual: "PLN_fznuix6rfk0yvho",
    },
    "7001-8000": {
      Monthly: "PLN_uiajiobfveorb6f",
      "6 Months": "PLN_9x4vnrlukz0eodh",
      Annual: "PLN_m6zz921yuzwyhhk",
    },
    "8001-9000": {
      Monthly: "PLN_rorgd67wj32n9bb",
      "6 Months": "PLN_8fm6fdfetxxc0eg",
      Annual: "PLN_jljugqgm1p00a7k",
    },
    "9001-10000": {
      Monthly: "PLN_x0ekcg7kcumqg20",
      "6 Months": "PLN_b5upats8asu1cqd",
      Annual: "PLN_70mbhb5yo32uxn4",
    },
    "10001-12000": {
      Monthly: "PLN_r18f2imgkzo43p8",
      "6 Months": "PLN_mlkxrjzq7om2uoe",
      Annual: "PLN_ja8532g65kiax5l",
    },
    "12001-14000": {
      Monthly: "PLN_xl7ujyclul9241j",
      "6 Months": "PLN_eyhw9ioygcbxhnu",
      Annual: "PLN_twh3wxootvrjaxs",
    },
    "14001-16000": {
      Monthly: "PLN_czl1l5y5hhv92dc",
      "6 Months": "PLN_0cr37nyo0ljok4h",
      Annual: "PLN_cx91svt1cs17969",
    },
    "16001-18000": {
      Monthly: "PLN_l689yl9pq9tixow",
      "6 Months": "PLN_p7iwskywef86i5g",
      Annual: "PLN_9xyvswpw5cky93l",
    },
    "18001-20000": {
      Monthly: "PLN_kmf1em57kril7za",
      "6 Months": "PLN_ce6fgq3pjxgjl67",
      Annual: "PLN_jk22fbze9937uj3",
    },
    "20001-25000": {
      Monthly: "PLN_krxm2538acwes22",
      "6 Months": "PLN_n26fke85c4b28lo",
      Annual: "PLN_q5nffft1fek3zvh",
    },
    "25001-30000": {
      Monthly: "PLN_ugkjag22um5pc3r",
      "6 Months": "PLN_3nfdubnsyv5cu8q",
      Annual: "PLN_1c89aascg5xzp81",
    },
    "30001-35000": {
      Monthly: "PLN_d3c188ttc2no15u",
      "6 Months": "PLN_jruirl1q3owsavp",
      Annual: "PLN_h7zxu2kjxx0i4w3",
    },
    "35001-40000": {
      Monthly: "PLN_gpupmdd7i6wbz7r",
      "6 Months": "PLN_i5az7oja3hr47zb",
      Annual: "PLN_3aj3v7fxh4dcxyx",
    },
    "40001-45000": {
      Monthly: "PLN_01zbxfynyecqxvm",
      "6 Months": "PLN_27u4et3w96y6quz",
      Annual: "PLN_wz5f9z3td7fq51n",
    },
    "45001-50000": {
      Monthly: "PLN_immfzyyo6uf2bla",
      "6 Months": "PLN_qz0rjy7s3usl6w7",
      Annual: "PLN_iuxy6di7h966uyv",
    },
    "50001-60000": {
      Monthly: "PLN_xtfjagzovwm7yw4",
      "6 Months": "PLN_qu4o0qekzwci1tt",
      Annual: "PLN_sclywgbc75328x9",
    },
    "60001-70000": {
      Monthly: "PLN_jj68xxyv2n9a4pa",
      "6 Months": "PLN_xcre8ytbtj8p7jd",
      Annual: "PLN_i5si0h3hio0yaxg",
    },
    "70001-80000": {
      Monthly: "PLN_wzkwhah7aropxt4",
      "6 Months": "PLN_z8xwhcch0y36qto",
      Annual: "PLN_fwh81erjldskghy",
    },
    "80001-90000": {
      Monthly: "PLN_b44er8o6osgkonx",
      "6 Months": "PLN_uu5mqrqg3z6j1ip",
      Annual: "PLN_dupkhdyswaj9ap0",
    },
    "90001-100000": {
      Monthly: "PLN_775o4ckpnq1xzzi",
      "6 Months": "PLN_9v1v7unlbauvam4",
      Annual: "PLN_c5kqdtbza5oinge",
    },
    "100001-125000": {
      Monthly: "PLN_6d709fr24sdkwnx",
      "6 Months": "PLN_rbeejgrh55j4lb3",
      Annual: "PLN_ninpk3pf9b8xdxw",
    },
    "125001-150000": {
      Monthly: "PLN_qc3ufsilg2gayq2",
      "6 Months": "PLN_n5zn30nm36rws86",
      Annual: "PLN_dxu7vq2qkeim7ku",
    },
    "150001-175000": {
      Monthly: "PLN_i8zthyk63n3vygc",
      "6 Months": "PLN_dlnnioz6nizcgd6",
      Annual: "PLN_f3rvtijle61ac0m",
    },
    "175001-200000": {
      Monthly: "PLN_9prxcvvdnltqtf3",
      "6 Months": "PLN_knzg71zifbr99wd",
      Annual: "PLN_twfymxcwyl482w9",
    },
    "200001-225000": {
      Monthly: "PLN_81rte1vaucion87",
      "6 Months": "PLN_xoppcd8cyd292rx",
      Annual: "PLN_h3gv3cujqyue787",
    },
    "225001-250000": {
      Monthly: "PLN_qa7stmodh2cd98v",
      "6 Months": "PLN_gyaugpmeu750rwe",
      Annual: "PLN_vbb5q78g32i5sgl",
    },
    "250001-300000": {
      Monthly: "PLN_n911guk2blpi8ww",
      "6 Months": "PLN_qgyl61s0isd7v8q",
      Annual: "PLN_aibpdi985w93juh",
    },
    "300001-350000": {
      Monthly: "PLN_m7btk47a5a2hq3b",
      "6 Months": "PLN_ru78mel89giwnsz",
      Annual: "PLN_knfyterblhfx6rb",
    },
    "350001-400000": {
      Monthly: "PLN_vgg2y1ucokrnsnn",
      "6 Months": "PLN_d5jzwrmhnydtyzm",
      Annual: "PLN_mg8z44t6c6gxx7s",
    },
    "400001-450000": {
      Monthly: "PLN_6wl8cw2rysvc6xp",
      "6 Months": "PLN_7zknuwuhsfl9v2t",
      Annual: "PLN_2xkf4kj3ujpr8ol",
    },
    "450001-500000": {
      Monthly: "PLN_xgfnworqqd23qhz",
      "6 Months": "PLN_w7pdnvfjrf10zyk",
      Annual: "PLN_o3yvsf27rt5zyc3",
    },
    "500001-600000": {
      Monthly: "PLN_wxtwget5s11ykzc",
      "6 Months": "PLN_8ms1qydnojz1q71",
      Annual: "PLN_gnlatvly34o6xak",
    },
    "600001-700000": {
      Monthly: "PLN_l4x45xejt9053tz",
      "6 Months": "PLN_qxxw8m6d1869o2a",
      Annual: "PLN_01i1e433627i66w",
    },
    "700001-800000": {
      Monthly: "PLN_gy6ytwpckjvbqa9",
      "6 Months": "PLN_a41ulm9k9dd55cj",
      Annual: "PLN_2pjxnh84qkrjcdz",
    },
    "800001-900000": {
      Monthly: "PLN_06z39gev2j4bapx",
      "6 Months": "PLN_uhcmp2b5v1mjr05",
      Annual: "PLN_422e27x1ls3i0e0",
    },
    "900001-1000000": {
      Monthly: "PLN_wonwng8imv1whie",
      "6 Months": "PLN_em3isjt023d67qh",
      Annual: "PLN_a6ezjwardhd96jk",
    },
    "1000001-1250000": {
      Monthly: "PLN_v9usa8dups1nwr1",
      "6 Months": "PLN_dvhsgb359hree6c",
      Annual: "PLN_f6emt3yl8p036ye",
    },
    "1250001-1500000": {
      Monthly: "PLN_zjvhypohbn3vpjd",
      "6 Months": "PLN_njr6ykjiktngkrr",
      Annual: "PLN_y09xlqwj7pct9uu",
    },
    "1500001-1750000": {
      Monthly: "PLN_m2aai9hfcp02m98",
      "6 Months": "PLN_aeu2zp1h9f3w738",
      Annual: "PLN_6lobkyqugk0fe43",
    },
    "1750001-2000000": {
      Monthly: "PLN_ndzcviwozkzgnyl",
      "6 Months": "PLN_ay73z38wsgky0yj",
      Annual: "PLN_4ytzp5tt0bzricg",
    },
    "2000001-2500000": {
      Monthly: "PLN_drnjcozq9g66bfg",
      "6 Months": "PLN_qfb9hdavt1a7fhd",
      Annual: "PLN_9u1cq7jgnyl460l",
    },
    "2500001-3000000": {
      Monthly: "PLN_1u7hszuih9qs7j1",
      "6 Months": "PLN_l02b14d4jxoahp1",
      Annual: "PLN_sg99a8pxpx0usf9",
    },
    "3000001-3500000": {
      Monthly: "PLN_lgc6srqqegnzfqm",
      "6 Months": "PLN_nuvmku1mtntz9gh",
      Annual: "PLN_gf2b6621nxwhdj1",
    },
    "3500001-4000000": {
      Monthly: "PLN_pgqifylgy3avcwk",
      "6 Months": "PLN_wq279ivhbyyk584",
      Annual: "PLN_ech93m3wmi5fhh5",
    },
    "4000001-4500000": {
      Monthly: "PLN_on62s7ahl0zr125",
      "6 Months": "PLN_qgnwx8owztymeqk",
      Annual: "PLN_k9xvtk4inuczlen",
    },
    "4500001-5000000": {
      Monthly: "PLN_ztefqkt0jlp5nn3",
      "6 Months": "PLN_bc4jjh59zdbfjzg",
      Annual: "PLN_rczg1ow6ht49xh1",
    },
  },
};

const EcoPayment = ({ plan }) => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(options[0].value);
  const [selectedPlan, setSelectedPlan] = useState("Monthly");
  const [currentPlan, setCurrentPlan] = useState("Plus");

  const user = useSelector((state) => state.authentication.user);
  const username = user?.data?.organizationName || "Unknown User";
  const creatorId = user?.data?.CreatorId || "Unknown User";
  console.log(creatorId);
  const Email = user?.data?.email || "No email";

  // const handlePaystackPayment = (planCode) => {
  //   const popup = new Paystack();

  //   popup.newTransaction({
  //     //key: "pk_live_f849722976a4354c340163f7d161f74d0f53fce6",
  //     key: "pk_test_57f928ef3b08dc974a816c89f7687c37e9afb03c",
  //     email: Email,
  //     //plan: planCode,
  //     plan: "PLN_marhiqmjkhdm3ta",
  //     currency: "NGN",
  //     text: loading ? "Processing" : "Paystack",
  //     payment_options: "card,mobilemoney,ussd",
  //     metadata: {
  //       custom_fields: [
  //         {
  //           display_name: username,
  //           variable_name: "Extra",
  //           value: username,
  //         },
  //       ],
  //     },

  //     // callback: (response) => {
  //     //   setLoading(true);
  //     //   console.log('Payment successful, reference:', response.reference);
  //     //   axios
  //     //     .post(`${import.meta.env.VITE_API_URL}/verify-subscription`, {
  //     //       reference: trxref,
  //     //       email: Email,
  //     //       userId: user.id,
  //     //       plan: selectedPlan,
  //     //     })
  //     //     .then((response) => {
  //     //       if (response.data.message === 'Course Purchased Successfully') {
  //     //         showToast(response.data.message);
  //     //         navigate('/student-My-Course/Learning');
  //     //         setOpenModal(true);
  //     //         setBlurBackground(true); // Apply blur effect when modal is open
  //     //       } else {
  //     //         showToast('Payment for course not verified');
  //     //       }
  //     //     })
  //     //     .catch((error) => {
  //     //       showToast('An error occurred during payment verification');
  //     //     })
  //     //     .finally(() => {
  //     //       setLoading(false);
  //     //     });
  //     // },
  //     onClose: () => {
  //       setLoading(false);
  //       showToast("You have canceled the transaction");
  //     },
  //     // onLoad: (txn) => {
  //     //   transaction = txn;
  //     //   clearInterval(redirectTimer);
  //     // },
  //   });

  //   // const redirectURL = `${window.location.origin}/creator/dashboard/payment`;
  //   // let timeElapsed = 0;
  //   // const timeLimit = 2;
  //   // let redirectTimer;

  //   // redirectTimer = setInterval(() => {
  //   //   timeElapsed += 1;
  //   //   if (timeElapsed === timeLimit) {
  //   //     if (transaction) {
  //   //       popup.cancelTransaction(transaction.id);
  //   //     }
  //   //     window.location.href = redirectURL;
  //   //   }
  //   // }, 1000);
  // };

  const handlePaystackPayment = (planCode) => {
    const popup = new Paystack();

    popup.newTransaction({
      key: "pk_live_f849722976a4354c340163f7d161f74d0f53fce6",
      //key: "pk_test_57f928ef3b08dc974a816c89f7687c37e9afb03c",
      email: Email,
      plan: planCode,
      //plan: "PLN_marhiqmjkhdm3ta",
      currency: "NGN",
      text: loading ? "Processing" : "Paystack",
      payment_options: "card,mobilemoney,ussd",
      metadata: {
        custom_fields: [
          {
            display_name: "Username",
            variable_name: "username",
            value: username,
          },
        ],
      },
      callback: (response) => {
        setLoading(true);
        const reference = response.trxref;

        axios
          .post(`${import.meta.env.VITE_API_URL}/verify-subscription`, {
            reference,
            creatorId: creatorId,
          })
          .then((response) => {
            if (
              response.data.message === "Subscription verified successfully"
            ) {
              showToast(response.data.message);
              navigate("/creator/dashboard/Preview-and-Send");
              setOpenModal(true);
              setBlurBackground(true);
            } else {
              showToast("Payment for course not verified");
            }
          })
          .catch((error) => {
            showToast("An error occurred during payment verification", error);
          })
          .finally(() => {
            setLoading(false);
          });
      },
      onClose: () => {
        setLoading(false);
        showToast("You have canceled the transaction");
      },
    });

    // const redirectURL = `${window.location.origin}/creator/dashboard/payment`;
    // let timeElapsed = 0;
    // const timeLimit = 2; // Time limit in seconds
    // let redirectTimer;

    // redirectTimer = setInterval(() => {
    //   timeElapsed += 1;
    //   if (timeElapsed === timeLimit) {
    //     if (transaction) {
    //       popup.cancelTransaction(transaction.id);
    //     }
    //     window.location.href = redirectURL;
    //   }
    // }, 1000);
  };

  // flutterwave payment
  const generateTxRef = () => {
    const randomString = Math.random().toString(36).substring(7); // Generate a random string
    const timestamp = Date.now(); // Get the current timestamp
    return `${timestamp}-${randomString}`; // Combine timestamp and random string
  };

  const handleFlutterPayment = useFlutterwave({
    public_key: "FLWPUBK-66d8ea488d57ba291013b93eae8bc3e8-X",
    tx_ref: generateTxRef(),
    amount: parseInt(sessionStorage.getItem("totalAmount")), // Default value, will be overwritten
    currency: sessionStorage.getItem("currencyValue"),
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: Email,
      phone_number: "09064000000",
      name: username,
    },
    customizations: {
      title: "Dimpified Plan Payment",
      description: "Payment for Plan Upgrade",
      logo: "https://res.cloudinary.com/djhnaee9k/image/upload/v1714038296/et5gicqtnuw4u1tqujjr.png",
    },
  });

  const verifyFlutterwave = async (tx_ref) => {
    sessionStorage.removeItem("totalAmount");
    try {
      const response = await axios.post(
        "https://unleashified-backend.azurewebsites.net/api/v1/provider-payment",
        {
          reference: tx_ref,
          email: emailUser,
          jobId: sessionStorage.getItem("jobId"),
          userId: sessionStorage.getItem("UserId"),
          type: "JOB",
          currency: sessionStorage.getItem("currencyValue"),
          provider: "flutterwave",
        }
      );
      setLoading(false);
      showToast(response.data.message);
    } catch (error) {
      setLoading(false);
      showToast(error.response.data.message);
    }
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const handleSizeChange = (newSize) => {
    setSelectedSize(newSize);
  };

  const handleSkipAndContinue = () => {
    navigate("/creator/dashboard/Preview-and-Send");
  };

  const handleSignUp = (planName) => {
    setCurrentPlan(planName);
    const selectedPlanObj = paymentPlanCodes[planName];

    const sizePlans = selectedPlanObj?.[selectedSize];
    const planCode = sizePlans ? sizePlans[selectedPlan] : null;

    if (planCode) {
      handlePaystackPayment(planCode);
    } else {
      showToast("Invalid plan selected");
    }
  };

  const getPlanDescription = (plan) => {
    switch (plan) {
      case "Lite":
        return "All the core features you need to get started with our ecosystem";
      case "Plus":
        return "Enhanced features to grow within our ecosystem";
      case "Pro":
        return "Professional tools for maximum impact in our ecosystem";
      case "Extra":
        return "Unlimited features for enterprise-level ecosystem integration";
      default:
        return "";
    }
  };

  const getPlanFeatures = (plan) => {
    const features = {
      Lite: {
        Website: [
          { feature: "Access to templates", available: true },
          { feature: "No code web page edit mode", available: true },
        ],
        "Website and Landing Pages": [
          { feature: "Access to templates", available: true },
          { feature: "No code web page edit mode", available: true },
          { feature: "Add logo to page", available: false },
          { feature: "Custom domain", available: false },
          { feature: "Remove GFA brand from landing page", available: false },
        ],
        "Forms Design & Development": [
          { feature: "1 form per ecosystem project", available: true },
          { feature: "3 Usecase form templates", available: true },
          { feature: "10 questions per form", available: true },
          { feature: "Premium form templates", available: false },

          { feature: "Remove GFA brand from form", available: false },
        ],
        "Course Management and Automation": [
          { feature: "Course builder module", available: true },
          { feature: "1 courses per ecosystem deployment", available: true },

          { feature: "Assessment builder module", available: false },
          { feature: "Statistics & visualization", available: false },

          { feature: "Exams & Quizzes", available: false },
          { feature: "Zoom, Teams or Webex Integration", available: false },
        ],
        "Payment and Subscriptions": [
          { feature: "1 payment gateway", available: true },
          { feature: "Payment management module", available: true },
          { feature: "Customer payment summary", available: true },

          { feature: "Multi-currency module", available: false },
          { feature: "Flexible pricing module", available: false },
        ],
        Emails: [
          { feature: "Up to 15000 emails per month", available: true },
          { feature: "100 MB of image storage", available: true },
          { feature: "3 sender email addresses, 1 domain", available: true },
        ],
        "Admin Users": [
          { feature: "3 Admin Users per account", available: true },
        ],
      },
      Plus: {
        "Website and Landing Pages": [
          { feature: "Access to templates", available: true },
          { feature: "No code web page edit mode", available: true },
          { feature: "Add logo to page", available: true },
          { feature: "Custom domain", available: false },
          { feature: "Remove GFA brand from landing page", available: true },
        ],
        "Forms Design & Development": [
          { feature: "10 forms per ecosystem project", available: true },
          { feature: "10 Usecase form templates", available: true },
          { feature: "10 Premium form templates", available: true },
          { feature: "10 questions per form", available: true },
          { feature: "Remove GFA brand from form", available: false },
        ],
        "Course Management and Automation": [
          { feature: "Course builder module", available: true },
          { feature: "Assessment builder module", available: true },
          { feature: "10 courses per ecosystem deployment", available: true },
          { feature: "Statistics & visualization", available: false },
          { feature: "Exams & Quizzes", available: true },
          { feature: "Zoom, Teams or Webex Integration", available: true },
        ],
        "Payment and Subscriptions": [
          { feature: "3 payment gateways", available: true },
          { feature: "Payment management module", available: true },
          { feature: "Customer payment summary", available: true },
          { feature: "Multi-currency module", available: true },
          { feature: "Flexible pricing module", available: false },
        ],
        Emails: [
          { feature: "Unlimited number of emails per month", available: true },
          { feature: "200 MB of image storage", available: true },
          { feature: "100 sender email addresses, 3 domain", available: true },
        ],
        "Admin Users": [
          { feature: "10 Admin Users per account", available: true },
        ],
      },
      Pro: {
        "Website and Landing Pages": [
          { feature: "Access to templates", available: true },
          { feature: "No code web page edit mode", available: true },
          { feature: "Add logo to page", available: true },
          { feature: "Custom domain", available: true },
          { feature: "Remove GFA brand from landing page", available: true },
        ],
        "Forms Design & Development": [
          { feature: "20 forms per ecosystem project", available: true },
          { feature: "20 Usecase form templates", available: true },
          { feature: "20 Premium form templates", available: true },
          { feature: "20 questions per form", available: true },
          { feature: "Remove GFA brand from form", available: true },
        ],
        "Course Management and Automation": [
          { feature: "Course builder module", available: true },
          { feature: "Assessment builder module", available: true },
          { feature: "Statistics & visualization", available: true },
          { feature: "10 courses per ecosystem deployment", available: true },
          { feature: "Exams & Quizzes", available: true },
          { feature: "Zoom, Teams or Webex Integration", available: true },
        ],
        "Payment and Subscriptions": [
          { feature: "6 payment gateways", available: true },
          { feature: "Payment management module", available: true },
          { feature: "Customer payment summary", available: true },
          { feature: "Multi-currency module", available: true },
          { feature: "Flexible pricing module", available: true },
        ],
        Emails: [
          { feature: "Unlimited number of emails per month", available: true },
          { feature: "500 MB of image storage", available: true },
          { feature: "300 sender email addresses, 5 domains", available: true },
        ],
        "Admin Users": [
          { feature: "25 Admin Users per account", available: true },
        ],
      },
      Extra: {
        "Website and Landing Pages": [
          { feature: "Access to templates", available: true },
          { feature: "No code web page edit mode", available: true },
          { feature: "Add logo to page", available: true },
          { feature: "Custom domain", available: true },
          { feature: "Remove GFA brand from landing page", available: true },
        ],
        "Forms Design & Development": [
          {
            feature: "Unlimited Number of forms per ecosystem project",
            available: true,
          },
          {
            feature: "Unlimited Number of Usecase form templates",
            available: true,
          },
          {
            feature: "Unlimited Number of Premium form templates",
            available: true,
          },
          {
            feature: "Unlimited Number of questions per form",
            available: true,
          },
          { feature: "Remove GFA brand from form", available: true },
        ],
        "Course Management and Automation": [
          { feature: "Course builder module", available: true },
          { feature: "Assessment builder module", available: true },
          { feature: "Statistics & visualization", available: true },
          {
            feature: "30 Number of courses per ecosystem deployment",
            available: true,
          },
          { feature: "Exams & Quizzes", available: true },
          { feature: "Zoom, Teams or Webex Integration", available: true },
        ],
        "Payment and Subscriptions": [
          { feature: "Unlimited Number of payment gateways", available: true },
          { feature: "Payment management module", available: true },
          { feature: "Customer payment summary", available: true },
          { feature: "Multi-currency module", available: true },
          { feature: "Flexible pricing module", available: true },
        ],
        Emails: [
          { feature: "Unlimited number of emails per month", available: true },
          { feature: "5 GB of image storage", available: true },
          {
            feature: "Unlimited sender email addresses and domain",
            available: true,
          },
        ],
        "Admin Users": [
          { feature: "Unlimited number of Admin Users", available: true },
        ],
      },
    };

    return (
      <ul className="lh-3" style={{ listStyleType: "none", paddingLeft: 0 }}>
        {Object.keys(features[plan]).map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <h5 className="mt-6">{section}</h5>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              {features[plan][section].map((item, itemIndex) => (
                <li key={itemIndex}>
                  {item.available ? (
                    <FaCheck color="green" className="fs-6" />
                  ) : (
                    <FaTimes color="red" />
                  )}{" "}
                  {item.feature}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    );
  };

  const renderPlanCard = (plan) => {
    if (plan.name === "Lite") {
      const liteFeatures = getPlanFeatures(plan.name);
      const firstFourFeatures = liteFeatures.props.children.slice(0, 1);
      const remainingFeatures = liteFeatures.props.children.slice(1);

      return (
        <Col md={3} className="mb-4" key={plan.name}>
          <Card style={{ height: "1870px", overflow: "hidden" }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "1.5rem" }}>Lite</Card.Title>
              <Card.Text>{getPlanDescription(plan.name)}</Card.Text>
              <h2>Free</h2>
              <ul
                style={{
                  listStyleType: "none",
                  paddingLeft: 0,
                  visibility: "hidden",
                }}
              >
                {firstFourFeatures}
              </ul>

              <Button variant="primary" className="mt-3 w-100 btn-lg mb-3">
                Sign Up
              </Button>

              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                {remainingFeatures}
              </ul>
              <Button
                variant="outline-primary"
                className="mt-3 w-100 btn-lg  mb-3"
              >
                Sign Up Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    }

    return (
      <Col md={3} className="mb-4" key={plan.name}>
        <Card
          className="border-0 mb-3"
          style={{ height: "1870px", overflow: "hidden" }}
        >
          <Card.Body>
            <Card.Title style={{ fontSize: "1.5rem" }}>{plan.name}</Card.Title>
            <Card.Text>{getPlanDescription(plan.name)}</Card.Text>
            <>
              <Form.Label>Choose the size of your list</Form.Label>
              <SizeSelect
                value={selectedSize}
                onChange={handleSizeChange}
                style={{ zIndex: 20 }}
                options={options}
              />
            </>
            {pricingData.plans.map((pricingPlan) => {
              if (pricingPlan.name === plan.name) {
                const price =
                  pricingPlan.prices[selectedSize]?.[selectedPlan] || "N/A";
                return (
                  <p
                    key={`${plan.name}-${selectedPlan}-${selectedSize}`}
                    className=" mt-5"
                  >
                    ₦<span className="mx-1 h2">{price}</span> / {selectedPlan}
                  </p>
                );
              }
              return null;
            })}
            <Button
              variant="primary"
              className="mt-3 w-100 btn-lg mb-3"
              onClick={() => handleSignUp(plan.name)}
            >
              Sign Up Now
            </Button>
            <Card.Text>{getPlanFeatures(plan.name)}</Card.Text>
            {/* <Button
              variant="outline-primary"
              className="mt-3 w-100 btn-lg  mb-3"
              
            >
              Sign Up Now
            </Button> */}
            <Modal show={openModal} onHide={() => setOpenModal(false)} centered>
              <Modal.Header closeButton>
                <Modal.Title>Select Payment Method</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="d-flex justify-content-center align-items-center gap-5 mb-3">
                  <div className="d-grid" style={{ height: "40px" }}>
                    <Button
                      className="btn btn-primary"
                      style={{ height: "100%", borderRadius: "20px" }}
                      onClick={handlePaystackPayment}
                      disabled={loading}
                    >
                      {loading ? "Processing" : "Pay with Paystack"}
                    </Button>
                  </div>
                  <div className="ml-3">
                    <Button
                      variant="btn btn-primary"
                      onClick={() => {
                        setOpenModal(false);
                      }}
                    >
                      Flutterwave
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </Card.Body>
        </Card>
      </Col>
    );
  };
  return (
    <Fragment>
      <EcoHeader />
      <section className="py-lg-5 py-3">
        <Container>
          {/* Page header */}
          <Row className="align-items-center">
            <Col xl={12} lg={12} md={12} sm={12}>
              <div className="mb-4 px-lg-1 px-1">
                <h1 className="display-4 text-dark fw-bold">
                  Choose your preferred plan
                </h1>
                <p className="display-8 text-dark">
                  Choose the best plan that suits your needs and get started
                  with our ecosystem.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div>
        <Container className="">
          <Row>
            <Col
              md={12}
              className="mb-4 d-flex justify-content-end align-items-center gap-4"
            >
              <Form.Label className="mb-2">Billing Period:</Form.Label>
              <div className="d-flex gap-3">
                <Form.Check
                  type="radio"
                  id="monthly"
                  checked={selectedPlan === "Monthly"}
                  onChange={() => handlePlanChange("Monthly")}
                />
                <Form.Label htmlFor="monthly">Monthly</Form.Label>

                <Form.Check
                  type="radio"
                  id="sixMonths"
                  checked={selectedPlan === "6 Months"}
                  onChange={() => handlePlanChange("6 Months")}
                />
                <Form.Label htmlFor="sixMonths">6 Months</Form.Label>

                <Form.Check
                  type="radio"
                  id="annual"
                  checked={selectedPlan === "Annual"}
                  onChange={() => handlePlanChange("Annual")}
                />
                <Form.Label htmlFor="annual">Annual</Form.Label>
              </div>
            </Col>
          </Row>
          <Row>{pricingData.plans.map((plan) => renderPlanCard(plan))}</Row>
          <Button
            variant="primary"
            onClick={handleSkipAndContinue}
            className="mt-4 mb-5"
          >
            Continue
          </Button>
        </Container>
      </div>
    </Fragment>
  );
};

export default EcoPayment;
