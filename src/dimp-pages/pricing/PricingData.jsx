const pricingData = {
  plans: [
    {
      name: "Lite",
      description: "Essential tools for an ecosystem",
    },
    {
      name: "Plus",
      description: "Essential tools for an ecosystem",
      prices: {
        "1-500": { Monthly: 24.0, "6 Months": 21.6, Annual: 19.2 },
        "501-1000": { Monthly: 36.0, "6 Months": 32.4, Annual: 28.8 },
        "1001-1500": { Monthly: 48.0, "6 Months": 43.2, Annual: 38.4 },
        "1501-2000": { Monthly: 60.0, "6 Months": 54.0, Annual: 48.0 },
        "2001-2500": { Monthly: 72.0, "6 Months": 64.8, Annual: 57.6 },
        "2501-3000": { Monthly: 84.0, "6 Months": 75.6, Annual: 67.2 },
        "3001-4000": { Monthly: 96.0, "6 Months": 86.4, Annual: 76.8 },
        "4001-5000": { Monthly: 108.0, "6 Months": 97.2, Annual: 86.4 },
        "5001-6000": { Monthly: 120.0, "6 Months": 108.0, Annual: 96.0 },
        "6001-7000": { Monthly: 132.0, "6 Months": 118.8, Annual: 105.6 },
        "7001-8000": { Monthly: 144.0, "6 Months": 129.6, Annual: 115.2 },
        "8001-9000": { Monthly: 156.0, "6 Months": 140.4, Annual: 124.8 },
        "9001-10000": { Monthly: 168.0, "6 Months": 151.2, Annual: 134.4 },
        "10001-12000": { Monthly: 192.0, "6 Months": 172.8, Annual: 153.6 },
        "12001-14000": { Monthly: 216.0, "6 Months": 194.4, Annual: 172.8 },
        "14001-16000": { Monthly: 240.0, "6 Months": 216.0, Annual: 192.0 },
        "16001-18000": { Monthly: 264.0, "6 Months": 237.6, Annual: 211.2 },
        "18001-20000": { Monthly: 288.0, "6 Months": 259.2, Annual: 230.4 },
        "20001-25000": { Monthly: 324.0, "6 Months": 291.6, Annual: 259.2 },
        "25001-30000": { Monthly: 384.0, "6 Months": 345.6, Annual: 307.2 },
        "30001-35000": { Monthly: 444.0, "6 Months": 399.6, Annual: 355.2 },
        "35001-40000": { Monthly: 504.0, "6 Months": 453.6, Annual: 403.2 },
        "40001-45000": { Monthly: 564.0, "6 Months": 507.6, Annual: 451.2 },
        "45001-50000": { Monthly: 624.0, "6 Months": 561.6, Annual: 499.2 },
        "50001-60000": { Monthly: 684.0, "6 Months": 615.6, Annual: 547.2 },
        "60001-70000": { Monthly: 756.0, "6 Months": 680.4, Annual: 604.8 },
        "70001-80000": { Monthly: 828.0, "6 Months": 745.2, Annual: 662.4 },
        "80001-90000": { Monthly: 900.0, "6 Months": 810.0, Annual: 720.0 },
        "90001-100000": { Monthly: 972.0, "6 Months": 874.8, Annual: 777.6 },
        "100001-125000": { Monthly: 1116.0, "6 Months": 1004.4, Annual: 892.8 },
        "125001-150000": {
          Monthly: 1260.0,
          "6 Months": 1134.0,
          Annual: 1008.0,
        },
        "150001-175000": {
          Monthly: 1404.0,
          "6 Months": 1263.6,
          Annual: 1123.2,
        },
        "175001-200000": {
          Monthly: 1548.0,
          "6 Months": 1393.2,
          Annual: 1238.4,
        },
        "200001-225000": {
          Monthly: 1692.0,
          "6 Months": 1522.8,
          Annual: 1353.6,
        },
        "225001-250000": {
          Monthly: 1716.0,
          "6 Months": 1544.4,
          Annual: 1372.8,
        },
        "250001-300000": {
          Monthly: 1872.0,
          "6 Months": 1684.8,
          Annual: 1497.6,
        },
        "300001-350000": {
          Monthly: 2028.0,
          "6 Months": 1825.2,
          Annual: 1622.4,
        },
        "350001-400000": {
          Monthly: 2184.0,
          "6 Months": 1965.6,
          Annual: 1747.2,
        },
        "400001-450000": {
          Monthly: 2340.0,
          "6 Months": 2106.0,
          Annual: 1872.0,
        },
        "450001-500000": {
          Monthly: 2520.0,
          "6 Months": 2268.0,
          Annual: 2016.0,
        },
        "500001-600000": {
          Monthly: 3120.0,
          "6 Months": 2808.0,
          Annual: 2496.0,
        },
        "600001-700000": {
          Monthly: 3720.0,
          "6 Months": 3348.0,
          Annual: 2976.0,
        },
        "700001-800000": {
          Monthly: 4320.0,
          "6 Months": 3888.0,
          Annual: 3456.0,
        },
        "800001-900000": {
          Monthly: 4920.0,
          "6 Months": 4428.0,
          Annual: 3936.0,
        },
        "900001-1000000": {
          Monthly: 5520.0,
          "6 Months": 4968.0,
          Annual: 4416.0,
        },
        "1000001-1250000": {
          Monthly: 6120.0,
          "6 Months": 5508.0,
          Annual: 4896.0,
        },
        "1250001-1500000": {
          Monthly: 7500.0,
          "6 Months": 6750.0,
          Annual: 6000.0,
        },
        "1500001-1750000": {
          Monthly: 8880.0,
          "6 Months": 7992.0,
          Annual: 7104.0,
        },
        "1750001-2000000": {
          Monthly: 10260.0,
          "6 Months": 9234.0,
          Annual: 8208.0,
        },
        "2000001-2500000": {
          Monthly: 11640.0,
          "6 Months": 10476.0,
          Annual: 9312.0,
        },
        "2500001-3000000": {
          Monthly: 13512.0,
          "6 Months": 12160.8,
          Annual: 10809.6,
        },
        "3000001-3500000": {
          Monthly: 15384.0,
          "6 Months": 13845.6,
          Annual: 12307.2,
        },
        "3500001-4000000": {
          Monthly: 17256.0,
          "6 Months": 15530.4,
          Annual: 13804.8,
        },
        "4000001-4500000": {
          Monthly: 19128.0,
          "6 Months": 17215.2,
          Annual: 15302.4,
        },
        "4500001-5000000": {
          Monthly: 21000.0,
          "6 Months": 18900.0,
          Annual: 16800.0,
        },
      },
    },
    {
      name: "Pro",
      description: "Full access to all ecosystem features",
      prices: {
        "1-500": { Monthly: 28.8, "6 Months": 25.92, Annual: 23.04 },
        "501-1000": { Monthly: 43.2, "6 Months": 38.88, Annual: 34.56 },
        "1001-1500": { Monthly: 57.6, "6 Months": 51.84, Annual: 46.08 },
        "1501-2000": { Monthly: 72.0, "6 Months": 64.8, Annual: 57.6 },
        "2001-2500": { Monthly: 86.4, "6 Months": 77.76, Annual: 69.12 },
        "2501-3000": { Monthly: 100.8, "6 Months": 90.72, Annual: 80.64 },
        "3001-4000": { Monthly: 115.2, "6 Months": 103.68, Annual: 92.16 },
        "4001-5000": { Monthly: 129.6, "6 Months": 116.64, Annual: 103.68 },
        "5001-6000": { Monthly: 144.0, "6 Months": 129.6, Annual: 115.2 },
        "6001-7000": { Monthly: 158.4, "6 Months": 142.56, Annual: 126.72 },
        "7001-8000": { Monthly: 172.8, "6 Months": 155.52, Annual: 138.24 },
        "8001-9000": { Monthly: 187.2, "6 Months": 168.48, Annual: 149.76 },
        "9001-10000": {
          Monthly: 201.6,
          "6 Months": 181.44,
          Annual: 161.28,
        },
        "10001-12000": {
          Monthly: 230.4,
          "6 Months": 207.36,
          Annual: 184.32,
        },
        "12001-14000": {
          Monthly: 259.2,
          "6 Months": 233.28,
          Annual: 207.36,
        },
        "14001-16000": { Monthly: 288.0, "6 Months": 259.2, Annual: 230.4 },
        "16001-18000": {
          Monthly: 316.8,
          "6 Months": 285.12,
          Annual: 253.44,
        },
        "18001-20000": {
          Monthly: 345.6,
          "6 Months": 311.04,
          Annual: 276.48,
        },
        "20001-25000": {
          Monthly: 388.8,
          "6 Months": 349.92,
          Annual: 311.04,
        },
        "25001-30000": {
          Monthly: 460.8,
          "6 Months": 414.72,
          Annual: 368.64,
        },
        "30001-35000": {
          Monthly: 532.8,
          "6 Months": 479.52,
          Annual: 426.24,
        },
        "35001-40000": {
          Monthly: 604.8,
          "6 Months": 544.32,
          Annual: 483.84,
        },
        "40001-45000": {
          Monthly: 676.8,
          "6 Months": 609.12,
          Annual: 541.44,
        },
        "45001-50000": {
          Monthly: 748.8,
          "6 Months": 673.92,
          Annual: 599.04,
        },
        "50001-60000": {
          Monthly: 820.8,
          "6 Months": 738.72,
          Annual: 656.64,
        },
        "60001-70000": {
          Monthly: 907.2,
          "6 Months": 816.48,
          Annual: 725.76,
        },
        "70001-80000": {
          Monthly: 993.6,
          "6 Months": 894.24,
          Annual: 794.88,
        },
        "80001-90000": {
          Monthly: 1080.0,
          "6 Months": 972.0,
          Annual: 864.0,
        },
        "90001-100000": {
          Monthly: 1166.4,
          "6 Months": 1049.76,
          Annual: 933.12,
        },
        "100001-125000": {
          Monthly: 1339.2,
          "6 Months": 1205.28,
          Annual: 1071.36,
        },
        "125001-150000": {
          Monthly: 1512.0,
          "6 Months": 1360.8,
          Annual: 1209.6,
        },
        "150001-175000": {
          Monthly: 1684.8,
          "6 Months": 1516.32,
          Annual: 1347.84,
        },
        "175001-200000": {
          Monthly: 1857.6,
          "6 Months": 1671.84,
          Annual: 1486.08,
        },
        "200001-225000": {
          Monthly: 2030.4,
          "6 Months": 1827.36,
          Annual: 1624.32,
        },
        "225001-250000": {
          Monthly: 2059.2,
          "6 Months": 1853.28,
          Annual: 1647.36,
        },
        "250001-300000": {
          Monthly: 2246.4,
          "6 Months": 2021.76,
          Annual: 1797.12,
        },
        "300001-350000": {
          Monthly: 2433.6,
          "6 Months": 2190.24,
          Annual: 1946.88,
        },
        "350001-400000": {
          Monthly: 2620.8,
          "6 Months": 2358.72,
          Annual: 2096.64,
        },
        "400001-450000": {
          Monthly: 2808.0,
          "6 Months": 2527.2,
          Annual: 2246.4,
        },
        "450001-500000": {
          Monthly: 3024.0,
          "6 Months": 2721.6,
          Annual: 2419.2,
        },
        "500001-600000": {
          Monthly: 3744.0,
          "6 Months": 3369.6,
          Annual: 2995.2,
        },
        "600001-700000": {
          Monthly: 4464.0,
          "6 Months": 4017.6,
          Annual: 3571.2,
        },
        "700001-800000": {
          Monthly: 5184.0,
          "6 Months": 4665.6,
          Annual: 4147.2,
        },
        "800001-900000": {
          Monthly: 5904.0,
          "6 Months": 5313.6,
          Annual: 4723.2,
        },
        "900001-1000000": {
          Monthly: 6624.0,
          "6 Months": 5961.6,
          Annual: 5299.2,
        },
        "1000001-1250000": {
          Monthly: 7344.0,
          "6 Months": 6609.6,
          Annual: 5875.2,
        },
        "1250001-1500000": {
          Monthly: 9000.0,
          "6 Months": 8100.0,
          Annual: 7200.0,
        },
        "1500001-1750000": {
          Monthly: 10656.0,
          "6 Months": 9590.4,
          Annual: 8524.8,
        },
        "1750001-2000000": {
          Monthly: 12312.0,
          "6 Months": 11080.8,
          Annual: 9849.6,
        },
        "2000001-2500000": {
          Monthly: 13968.0,
          "6 Months": 12571.2,
          Annual: 11174.4,
        },
        "2500001-3000000": {
          Monthly: 16214.4,
          "6 Months": 14592.96,
          Annual: 12971.52,
        },
        "3000001-3500000": {
          Monthly: 18460.8,
          "6 Months": 16614.72,
          Annual: 14768.64,
        },
        "3500001-4000000": {
          Monthly: 20707.2,
          "6 Months": 18636.48,
          Annual: 16565.76,
        },
        "4000001-4500000": {
          Monthly: 22953.6,
          "6 Months": 20658.24,
          Annual: 18362.88,
        },
        "4500001-5000000": {
          Monthly: 25200.0,
          "6 Months": 22680.0,
          Annual: 20160.0,
        },
      },
    },
    {
      name: "Extra",
      description: "Advanced features for large companies",
      prices: {
        "1-500": { Monthly: 40.32, "6 Months": 36.29, Annual: 32.26 },
        "501-1000": { Monthly: 60.48, "6 Months": 54.43, Annual: 48.38 },
        "1001-1500": { Monthly: 80.64, "6 Months": 72.58, Annual: 64.51 },
        "1501-2000": { Monthly: 100.8, "6 Months": 90.72, Annual: 80.64 },
        "2001-2500": { Monthly: 120.96, "6 Months": 108.86, Annual: 96.77 },
        "2501-3000": { Monthly: 141.12, "6 Months": 127.01, Annual: 112.9 },
        "3001-4000": { Monthly: 161.28, "6 Months": 145.15, Annual: 129.02 },
        "4001-5000": { Monthly: 181.44, "6 Months": 163.3, Annual: 145.15 },
        "5001-6000": { Monthly: 201.6, "6 Months": 181.44, Annual: 161.28 },
        "6001-7000": { Monthly: 221.76, "6 Months": 199.58, Annual: 177.41 },
        "7001-8000": { Monthly: 241.92, "6 Months": 217.73, Annual: 193.54 },
        "8001-9000": { Monthly: 262.08, "6 Months": 235.87, Annual: 209.66 },
        "9001-10000": { Monthly: 282.24, "6 Months": 254.02, Annual: 225.79 },
        "10001-12000": { Monthly: 322.56, "6 Months": 290.3, Annual: 258.05 },
        "12001-14000": { Monthly: 362.88, "6 Months": 326.59, Annual: 290.3 },
        "14001-16000": { Monthly: 403.2, "6 Months": 362.88, Annual: 322.56 },
        "16001-18000": {
          Monthly: 443.52,
          "6 Months": 399.17,
          Annual: 354.82,
        },
        "18001-20000": {
          Monthly: 483.84,
          "6 Months": 435.46,
          Annual: 387.07,
        },
        "20001-25000": {
          Monthly: 544.32,
          "6 Months": 489.89,
          Annual: 435.46,
        },
        "25001-30000": { Monthly: 645.12, "6 Months": 580.61, Annual: 516.1 },
        "30001-35000": {
          Monthly: 745.92,
          "6 Months": 671.33,
          Annual: 596.74,
        },
        "35001-40000": {
          Monthly: 846.72,
          "6 Months": 762.05,
          Annual: 677.38,
        },
        "40001-45000": {
          Monthly: 947.52,
          "6 Months": 852.77,
          Annual: 758.02,
        },
        "45001-50000": {
          Monthly: 1048.32,
          "6 Months": 943.49,
          Annual: 838.66,
        },
        "50001-60000": {
          Monthly: 1149.12,
          "6 Months": 1034.21,
          Annual: 919.3,
        },
        "60001-70000": {
          Monthly: 1270.08,
          "6 Months": 1143.07,
          Annual: 1016.06,
        },
        "70001-80000": {
          Monthly: 1391.04,
          "6 Months": 1251.94,
          Annual: 1112.83,
        },
        "80001-90000": {
          Monthly: 1512.0,
          "6 Months": 1360.8,
          Annual: 1209.6,
        },
        "90001-100000": {
          Monthly: 1632.96,
          "6 Months": 1469.66,
          Annual: 1306.37,
        },
        "100001-125000": {
          Monthly: 1874.88,
          "6 Months": 1687.39,
          Annual: 1499.9,
        },
        "125001-150000": {
          Monthly: 2116.8,
          "6 Months": 1905.12,
          Annual: 1693.44,
        },
        "150001-175000": {
          Monthly: 2358.72,
          "6 Months": 2122.85,
          Annual: 1886.98,
        },
        "175001-200000": {
          Monthly: 2600.64,
          "6 Months": 2340.58,
          Annual: 2080.51,
        },
        "200001-225000": {
          Monthly: 2842.56,
          "6 Months": 2558.3,
          Annual: 2274.05,
        },
        "225001-250000": {
          Monthly: 2882.88,
          "6 Months": 2594.59,
          Annual: 2306.3,
        },
        "250001-300000": {
          Monthly: 3144.96,
          "6 Months": 2830.46,
          Annual: 2515.97,
        },
        "300001-350000": {
          Monthly: 3407.04,
          "6 Months": 3066.34,
          Annual: 2725.63,
        },
        "350001-400000": {
          Monthly: 3669.12,
          "6 Months": 3302.21,
          Annual: 2935.3,
        },
        "400001-450000": {
          Monthly: 3931.2,
          "6 Months": 3538.08,
          Annual: 3144.96,
        },
        "450001-500000": {
          Monthly: 4233.6,
          "6 Months": 3810.24,
          Annual: 3386.88,
        },
        "500001-600000": {
          Monthly: 5241.6,
          "6 Months": 4717.44,
          Annual: 4193.28,
        },
        "600001-700000": {
          Monthly: 6249.6,
          "6 Months": 5624.64,
          Annual: 4999.68,
        },
        "700001-800000": {
          Monthly: 7257.6,
          "6 Months": 6531.84,
          Annual: 5806.08,
        },
        "800001-900000": {
          Monthly: 8265.6,
          "6 Months": 7439.04,
          Annual: 6612.48,
        },
        "900001-1000000": {
          Monthly: 9273.6,
          "6 Months": 8346.24,
          Annual: 7418.88,
        },
        "1000001-1250000": {
          Monthly: 10281.6,
          "6 Months": 9253.44,
          Annual: 8225.28,
        },
        "1250001-1500000": {
          Monthly: 12600.0,
          "6 Months": 11340.0,
          Annual: 10080.0,
        },
        "1500001-1750000": {
          Monthly: 14918.4,
          "6 Months": 13426.56,
          Annual: 11934.72,
        },
        "1750001-2000000": {
          Monthly: 17236.8,
          "6 Months": 15513.12,
          Annual: 13789.44,
        },
        "2000001-2500000": {
          Monthly: 19555.2,
          "6 Months": 17599.68,
          Annual: 15644.16,
        },
        "2500001-3000000": {
          Monthly: 22700.16,
          "6 Months": 20430.14,
          Annual: 18160.13,
        },
        "3000001-3500000": {
          Monthly: 25845.12,
          "6 Months": 23260.61,
          Annual: 20676.1,
        },
        "3500001-4000000": {
          Monthly: 28990.08,
          "6 Months": 26091.07,
          Annual: 23192.06,
        },
        "4000001-4500000": {
          Monthly: 32135.04,
          "6 Months": 28921.54,
          Annual: 25708.03,
        },
        "4500001-5000000": {
          Monthly: 35280.0,
          "6 Months": 31752.0,
          Annual: 28224.0,
        },
      },
    },
  ],
};

export default pricingData;
