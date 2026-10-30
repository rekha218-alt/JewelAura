// ============================================================
// JEWELAURA - COMPLETE JEWELLERY WEBSITE JAVASCRIPT
// 100 PRODUCTS + REAL IMAGE LINKS + CAMERA + VIRTUAL TRY-ON
// ============================================================


// ============================================================
// 1. CATEGORY CONFIGURATION
// ============================================================

const categories = [
    {
        key: "chain",
        name: "Neck Chain",
        emoji: "📿"
    },
    {
        key: "earring",
        name: "Earring",
        emoji: "✨"
    },
    {
        key: "nosepin",
        name: "Nose Pin",
        emoji: "💎"
    },
    {
        key: "bangle",
        name: "Bangle",
        emoji: "⭕"
    },
    {
        key: "headchain",
        name: "Head Chain",
        emoji: "👑"
    }
];


// ============================================================
// 2. REAL JEWELLERY IMAGE LINKS
//
// PASTE YOUR REAL IMAGE LINKS INSIDE THESE ARRAYS.
//
// Each category must have 20 image links.
//
// Example:
//
// "https://example.com/chain1.png"
//
// IMPORTANT:
// Use direct image URLs.
// Transparent PNG images are best for virtual try-on.
// ============================================================


const jewelleryPhotos = {

    // --------------------------------------------------------
    // NECK CHAINS - 20 IMAGES
    // --------------------------------------------------------

    chain: [

        "https://www.khazanajewellery.com/on/demandware.static/-/Sites-khazana-master-catalog/default/dwc20d89cf/images/GoldImages/Necklace/NCBBWOM315_AV.jpg", // 1
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRsRxUuzCVA3EqdCPODLHY9NsXEVF-y7JOJ_l7s33MPj-OvjrOqvjCk-PqAUepd4yXTYa1NN3M-6sjOrumlxRMBYi3MgfM9dsez4zOB51CdLhWnHK1qPPZefdMjIl5UxRKecI6nWPCCyw&usqp=CAc", // 2
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSHHw-KBRNJ7FXmYe0ZR2cRFF3iQzRwcwh2PD9Y-aYBnpwZh-s577fzWOIzpYGTXGV0giFefwQ6V2JigiHzjO8Q_RflB12SRjoI5fOdaovw2ngWxH2n36uPEKJUin1ehODZqTrwVhKYfm8&usqp=CAc", // 3
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTapoUFKZymHQyeBxMWqE-H-WKbkjLmfW6d-NqITLx_Rw&s=10", // 4
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnsuoW3Ic6sIIwcmLcbc51tws37o78yakRzMpMgwB_DQ&s=10", // 5

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZuq_A5j20Smw3MZM3LtyjI7hR6yg9nZz379XMIgL0w&s=10", // 6
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq1McZAFLzTAOjls4THCgkMDeWDhH_nvrC1gcb87LCXg&s=10", // 7
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeZC9t9Xl5IslCaRnXeTuFASZ84-_WB7-tgd9n05IaA&s=10", // 8
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeznQajsl-jmlEtPZ9mTuplIxUZRW_ElC5m31TYnQU-Q&s=10", // 9
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1hMGBVbvuyoqGXmCn1Qt-tpG4WwqqnWWT9YKEl487yQ&s=10", // 10

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjA_JrLixPlDzT2MGzs9DmsD3rU_HgPgPyG9QXnCNAtQ&s=10", // 11
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFPYFdw_3LIMNSWnBb75efPMxVrg0W220rCDBDrZ-d7g&s=10", // 12
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUB8e1PzClkhPCilEd7ovUJu4lWCTQXQ75VuNt1b9YVA&s=10", // 13
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRszknlsuMtJht50_cRNfDYUG-tLIAoOSeGSw9N8AoHOw&s=10", // 14
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlahUiKEdnnfYdV7ATF2BoEQQqxQZ1cJbfWOCuMnjAA&s=10", // 15

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnlBbDFw0L43WpB1GnL7BvheV88SLM3ytPy9Q82L_yQg&s=10", // 16
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHeyWNrCDzFzddppEAGe3hnSc-xWA-R6keWAHkjY0JLA&s=10", // 17
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvUxbPTBQncLpDdEai1ws1MmQwR7kt0jvrHSTHvVOJWg&s=10", // 18
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0trn7D_7K8A0bI7bO_okv_2mSyM3EMkeBrpCuLH7PA&s=10", // 19
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd5smChYtEYERKdr-ouGCNUPdj89tUYnj_WcCq4teKzQ&s=10"  // 20

    ],


    // --------------------------------------------------------
    // EARRINGS - 20 IMAGES
    // --------------------------------------------------------

    earring: [

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlqEqfON3vnk1paUlNELZ_KMCULUVBuGNI7apEy5HWCg&s=10", // 1
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx4YBWKD2COq5ikQR45-j2IYg9PIQTwBXgetlcyOYsFg&s=10", // 2
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCz-H4ziJG5jvPEAaFDNapFM6nRVPb-_sykTzE-Nhckw&s=10", // 3
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9EEabTLBEa2WXUF7k2IR6bJAhJYgR1cRfJpebwmjvAA&s=10", // 4
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsEs0SvBPCqFmrFSo3n2nqjUFGl9zhmkLi8PddnvXsHQ&s=10", // 5

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5miYUF4Ax1AVYQSEwGIl9LKvw8tKTXYNRKRAacoJDSw&s=10", // 6
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZaq_oUpA-1b2D6nJgSr9C9EKMEHlJvgmXe1FPyFv6w&s=10", // 7
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRviV3_gHYfNte9LcQe3uC3RaWo23g4gqwREnS1MWJrzA&s=10", // 8
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGnnl0Z_c_6HNLVOGE8KTKiezWXEhZMktfa5OTwJeFg&s=10", // 9
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsnCmLZ7x40VOdYE9nCYfPbr0JPgJWBvfGY_HPUFbY_w&s=10", // 10

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToWITBBwW_zKugK4yN7csSg5g0nBiel17GAeony0yRRQ&s=10", // 11
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQugBHz07CJdF9JfbyMQOuboVXVr355JxR8FYeD-jZUzg&s=10", // 12
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTc-dFeZIdcAu2GYUkSR2EggxW_uLhNmBuAhl5uq721w&s=10", // 13
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvF3QKxNG_V8E97wyyRsIVkUVhzgIVj8M0EaD_ce01ew&s", // 14
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT_ivoY3Wh-ZP-XeButsOae2LEyN28vwSl5hBIgVdPcg&s=10", // 15

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwiWzEgLZm3vM5A6fV7hiiw0IzMPwhFv7YHw__AQTUbA&s=10", // 16
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfnV_HjYhwalIEd8dK0S0YtokQ2tsl7y0shXcM3rejAA&s=10", // 17
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS63gmaXISl03UmbJE4x0g4u4SyH8NHqMRTx5nVXoRIAg&s=10", // 18
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ85eUToeN1NDYSMWdI8pcuvAWvBTbuPMpLRPdMgUgpQ&s", // 19
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkE2EWuSsvBqmZwQfrONfTb0zwR8BkJXTYGaJkUQ23GrYenewPij2QXSg&s=10"  // 20

    ],


    // --------------------------------------------------------
    // NOSE PINS - 20 IMAGES
    // --------------------------------------------------------

    nosepin: [

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4q5K84lsVykV806eNcgRioANZGM8b5Zn2GiSbOH8RUg&s=10", // 1
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvog3b3KCMRSXR2ocrKXuy5oWnmvma2x33eaRN7ItNdg&s=10", // 2
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQplBzRxWrIvwMR19lczLpkqUoMJQa9wRf_520wp-IIjw&s=10", // 3
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxHEPpzvSkbwf2skQ9vPREVX9tmljDq2cj2VbGsi6Ukw&s=10", // 4
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBmG4GkqZjhzQgpd_1Yxme6kK9hQPyKCk07ygPUYH4g&s=10", // 5

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJ9ljKznEJ9PazwU6gBdpSVWCn2g4G0uHC9cpYwBVxQ&s=10", // 6
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXoV-Qkfc_HM5UBY0AY3Bo8tkvPa0Cj0Td1O2Rq5exaA&s=10", // 7
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvfZIpSJ_UInz-oujeZ6GmnFTuA0iKE3QODp_dZchQQ&s=10", // 8
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7PJL5KNwJGBvtEEBgyF8URBaEDft23-NwqINOr0r5-A&s=10", // 9
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV8YMGLQBjnn9CIKlDzNvuKhatHqh0qWETvya_eEjRvw&s=10", // 10

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXqlJ8kQz5gYbf5DiE2r3DrKTFt4FOHZKZmw_S859qw&s=10", // 11
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNXB2pcnwXpdDW8xaOnHHsBzNFFAkmuU5GOvKeN-O52Q&s=10", // 12
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe7Bk9vC6san1Xe0vyLTtGaKW_cU-GYcS121MFGZOwyA&s=10", // 13
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3-drDXU-Uqtq5W8M_9qpLgFv7lDzJQewxrw9wk5RIig&s=10", // 14
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRpjUiZphG8zl5BuXCkenHY3q3x-Mn71EfGd5y3DwwA&s=10", // 15

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ESQWn6N-G_dIyjTt0BXn2rBvTerVzDxwOTePvCMJFw&s=10", // 16
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpbSXoJQeL7XNGdZwk4s75TEL4PqADrjJepURrTAWBQ&s=10", // 17
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd3v9LijD93RZORjc-BvgL_EeI4c7EJSzqFdlz-pKxrQ&s=10", // 18
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKxJkzWn1pNIyYwo0TPi2Qz7uODspoj8vn8-CrnDM46w&s=10", // 19
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhv6aKwLY29Hfaxhg23TUGo2WLzaB0UkIabjCSd6MGmw&s=10"  // 20

    ],


    // --------------------------------------------------------
    // BANGLLES - 20 IMAGES
    // --------------------------------------------------------

    bangle: [

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXgzrlpoaPVlkJLmzWWmP7XDwa41Eq740QzqARrXleQ&s=10", // 1
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShXguxFbD9KXf8LrV8a4CNy-YHQXDY2SWUNujoEHxbHw&s=10", // 2
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY37bW_nMZItPdRsBGXMvtSb9t_igzK8NOqTG7XVHzAA&s", // 3
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQPHw0dhhMorkks1CR9vJSTO0NvS5rX9hFay40O12sg&s=10", // 4
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZMlIxhdV8G9TF-VIp5EqCTQ89FWWWH-_-aqXy-kcNiQ&s=10", // 5

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83Swiv3TlZ5Aeus5eFxV3CHVXTuVpiU0LorwGhfw1BQ&s=10", // 6
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzzRdg1UggDwfxemzqg1Pl72S8yLgAnRQEFoEftzksNg&s=10", // 7
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnro_zMRuv43S3aaGbQd_6EA4xf_yetpoczQdIt0CJsA&s=10", // 8
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSH5Nzh7lNxy5uIIr5qqK17q8Rz2CsE1rHr5-WkgY_6g&s", // 9
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hriJqILyO-YFzOr8KGdwS7daNnEBOxp32s-tWivzvQ&s=10", // 10

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepTELFi0XKEmY1X-9u5BKlk_ojTKiv0nbDd_zymBiaw&s=10", // 11
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBbTr1T258oTxpRS0_C1bwr_GDNf6AcrGWmvserG4A5A&s=10", // 12
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfd48JVFwjqb10CarZa3WuWYPdY1KROgB2Mxvg01m8Q&s", // 13
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfkUYaRSUiTGZYw7xZ0iclKxkEaRSBZkDNUiFR8sWxyw&s=10", // 14
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHgdB3jeK_Mf16apBYGoMD6mLNkJ87qM4bveF4EtpVgg&s=10", // 15

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNVCKo7NjUggWj_1qehKbXU8luQHUe7RVxen47TJfAZQ&s", // 16
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdz4Cm1LQMvD_NVj-9rb_ybhtjanpYoU4xEJCqgDnxiQ&s=10", // 17
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIZb3oirC3tJvJ0gKdSTj_nPHNirQOG21d6ZV4xAGMPg&s=10", // 18
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWJV_uDCVCAlAYyFML9uDnoHSIHDtD66Ozmmw6MyodA&s=10", // 19
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGCTNIENJuLMzCx5wJ1bavCydSlumZlVDzU_Rcq962A&s"  // 20

    ],


    // --------------------------------------------------------
    // HEAD CHAINS - 20 IMAGES
    // --------------------------------------------------------

    headchain: [

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz9wyKKkkBkRX5qz-dGjQGaOpp2OgWqsTyPntF4JOc9g&s=10", // 1
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtHg4Y_f_oXfX0T9kqhoREVZmDmvIX-kmBY0Snezz7A&s=10", // 2
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPIQd4oBYPPCVyfjRKJZsQ6vK5-4KUoVbpN6v6Ul7LA&s=10", // 3
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYunhaGbn8mWRN2JBNMAv3DueXwLzt3G1tpZ60ypdaDA&s=10", // 4
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4GP3O84cBM7x2-obdYZTSLMM1UJTCQ-Gk_3Le-0rhQA&s=10", // 5

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsx5_YdgRwRSbzkApY_SMi1Dq_wdi47oiLzcNufO_SbQ&s=10", // 6
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiv4PR8wpkKt31Cy9qugGgZzFqMDz5d_RKEm5t9hFsTQ&s=10", // 7
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_dASr-uiRR4HfYkzlKgYY1r3xGyJ-u0FU2Ku_tfzhpg&s=10", // 8
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zv0wVZbuCbkDcX-0Ipq_lA-WP910OU5OFNhP4UqlmQ&s=10", // 9
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgY8aKtc1fx3MzikwCSeApi3mtCG-pI9OjarRJB6OJcQ&s=10", // 10

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTEOssTzuN-8YYYaQswbrwyXpem2TT6kCtPm6MIOI3zQ&s=10", // 11
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRICwokH61R5UGr_aqZJOyhNoQ5_lpQ50AExUoSbhxmCg&s=10", // 12
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSItkc1LrqNTBoqNyvQqLcCfCqlmB2oPmDWQYSTBCUP2w&s=10", // 13
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBadcTCwAybfi343k2azpYo2Ajmiz4k-lOMy7M_NkTQQ&s=10", // 14
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSapJKeDxYAWNqKDW2M6CgF_r14SVF6TRLvbrMwMSuug&s", // 15

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUr0DbszbRqJ-vzqkUQ8YUeloErZwn_0-CkWdMWFCbxg&s=10", // 16
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSYg2fJRFwO_PzFKTJRA0k-5C4hzBaIAOt2kPGTX2-A&s=10", // 17
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2I-uOEoDyqhjPfjBXIN0MVdn_eNg_xCgIrwWYiLKuQ&s=10", // 18
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLD-zRgVdzP-fiCadnRwlH7BYyYlHB9XsO7_2wHMbhvA&s=10", // 19
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWnYMh6ECqJaLMj7QQwmtUrOrisIOoWDpxFfUhVm6s6g&s=10"  // 20

    ]

};


// ============================================================
// 3. TRANSPARENT TRY-ON IMAGE LINKS
//
// If you have separate transparent jewellery images for try-on,
// paste those links here.
//
// If these are empty, the website uses the product image link.
//
// BEST RESULT:
// Use transparent PNG jewellery images.
// ============================================================


const tryOnPhotos = {

    chain: [
        "https://www.khazanajewellery.com/on/demandware.static/-/Sites-khazana-master-catalog/default/dwc20d89cf/images/GoldImages/Necklace/NCBBWOM315_AV.jpg", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRsRxUuzCVA3EqdCPODLHY9NsXEVF-y7JOJ_l7s33MPj-OvjrOqvjCk-PqAUepd4yXTYa1NN3M-6sjOrumlxRMBYi3MgfM9dsez4zOB51CdLhWnHK1qPPZefdMjIl5UxRKecI6nWPCCyw&usqp=CAc", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSHHw-KBRNJ7FXmYe0ZR2cRFF3iQzRwcwh2PD9Y-aYBnpwZh-s577fzWOIzpYGTXGV0giFefwQ6V2JigiHzjO8Q_RflB12SRjoI5fOdaovw2ngWxH2n36uPEKJUin1ehODZqTrwVhKYfm8&usqp=CAc", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTapoUFKZymHQyeBxMWqE-H-WKbkjLmfW6d-NqITLx_Rw&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnsuoW3Ic6sIIwcmLcbc51tws37o78yakRzMpMgwB_DQ&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZuq_A5j20Smw3MZM3LtyjI7hR6yg9nZz379XMIgL0w&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq1McZAFLzTAOjls4THCgkMDeWDhH_nvrC1gcb87LCXg&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeZC9t9Xl5IslCaRnXeTuFASZ84-_WB7-tgd9n05IaA&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeznQajsl-jmlEtPZ9mTuplIxUZRW_ElC5m31TYnQU-Q&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1hMGBVbvuyoqGXmCn1Qt-tpG4WwqqnWWT9YKEl487yQ&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjA_JrLixPlDzT2MGzs9DmsD3rU_HgPgPyG9QXnCNAtQ&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFPYFdw_3LIMNSWnBb75efPMxVrg0W220rCDBDrZ-d7g&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUB8e1PzClkhPCilEd7ovUJu4lWCTQXQ75VuNt1b9YVA&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRszknlsuMtJht50_cRNfDYUG-tLIAoOSeGSw9N8AoHOw&s=10", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlahUiKEdnnfYdV7ATF2BoEQQqxQZ1cJbfWOCuMnjAA&s=10",
        "", "", "", "", ""
    ],

    earring: [
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", ""
    ],

    nosepin: [
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", ""
    ],

    bangle: [
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", ""
    ],

    headchain: [
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", "",
        "", "", "", "", ""
    ]

};


// ============================================================
// 4. PRODUCT DESIGN NAMES
//
// Each product receives a different name.
// ============================================================


const designNames = {

    chain: [
        "Classic Gold Chain",
        "Royal Pendant Chain",
        "Temple Gold Chain",
        "Diamond Line Chain",
        "Traditional Mango Chain",
        "Pearl Gold Chain",
        "Floral Pendant Chain",
        "Antique Gold Chain",
        "Layered Style Chain",
        "Lakshmi Pendant Chain",
        "Minimal Gold Chain",
        "Ruby Pendant Chain",
        "Emerald Gold Chain",
        "Bridal Necklace Chain",
        "Kundan Gold Chain",
        "Elegant Daily Chain",
        "Heavy Temple Chain",
        "Designer Diamond Chain",
        "Premium Bridal Chain",
        "Royal Heritage Chain"
    ],


    earring: [
        "Classic Gold Studs",
        "Diamond Drop Earrings",
        "Traditional Jhumkas",
        "Pearl Drop Earrings",
        "Floral Gold Earrings",
        "Temple Earrings",
        "Ruby Stone Earrings",
        "Emerald Earrings",
        "Antique Gold Jhumkas",
        "Chandbali Earrings",
        "Elegant Hoop Earrings",
        "Bridal Gold Earrings",
        "Kundan Earrings",
        "Designer Drop Earrings",
        "Minimal Gold Earrings",
        "Traditional Bell Earrings",
        "Premium Pearl Jhumkas",
        "Royal Chandbali",
        "Floral Diamond Earrings",
        "Heritage Gold Earrings"
    ],


    nosepin: [
        "Classic Gold Nose Pin",
        "Diamond Nose Pin",
        "Ruby Nose Pin",
        "Emerald Nose Pin",
        "Floral Nose Pin",
        "Pearl Nose Pin",
        "Traditional Gold Nose Pin",
        "Antique Nose Pin",
        "Heart Design Nose Pin",
        "Star Design Nose Pin",
        "Premium Diamond Nose Pin",
        "Minimal Gold Nose Pin",
        "Bridal Nose Pin",
        "Round Stone Nose Pin",
        "Flower Diamond Nose Pin",
        "Designer Gold Nose Pin",
        "Elegant Pearl Nose Pin",
        "Royal Nose Pin",
        "Classic Ruby Nose Pin",
        "Heritage Nose Pin"
    ],


    bangle: [
        "Classic Gold Bangle",
        "Diamond Gold Bangle",
        "Traditional Temple Bangle",
        "Floral Gold Bangle",
        "Antique Gold Bangle",
        "Ruby Stone Bangle",
        "Emerald Stone Bangle",
        "Pearl Gold Bangle",
        "Designer Bridal Bangle",
        "Kundan Gold Bangle",
        "Minimal Gold Bangle",
        "Royal Heritage Bangle",
        "Traditional Carved Bangle",
        "Premium Diamond Bangle",
        "Elegant Daily Bangle",
        "Floral Diamond Bangle",
        "Heavy Bridal Bangle",
        "Classic Stone Bangle",
        "Royal Temple Bangle",
        "Designer Gold Bangle"
    ],


    headchain: [
        "Classic Gold Head Chain",
        "Bridal Matha Patti",
        "Traditional Maang Tikka",
        "Pearl Head Chain",
        "Diamond Head Chain",
        "Temple Head Chain",
        "Floral Head Chain",
        "Antique Bridal Head Chain",
        "Ruby Maang Tikka",
        "Emerald Head Chain",
        "Kundan Matha Patti",
        "Royal Bridal Head Chain",
        "Minimal Gold Head Chain",
        "Designer Maang Tikka",
        "Pearl Bridal Matha Patti",
        "Traditional Gold Matha Patti",
        "Premium Diamond Head Chain",
        "Floral Bridal Head Chain",
        "Heritage Maang Tikka",
        "Royal Temple Head Chain"
    ]

};


// ============================================================
// 5. CREATE ALL 100 PRODUCTS
// ============================================================


const products = [];

categories.forEach(category => {

    for (let i = 1; i <= 20; i++) {

        const index = i - 1;

        const imageURL =
            jewelleryPhotos[category.key][index] || "";

        const tryOnURL =
            tryOnPhotos[category.key][index] || imageURL;


        const product = {

            id: `${category.key}${i}`,

            cat: category.key,

            categoryName: category.name,

            emoji: category.emoji,

            name: designNames[category.key][index],

            variant: i,

            price: 799 + (i * 137),

            image: imageURL,

            tryOnImage: tryOnURL

        };


        products.push(product);

    }

});


// ============================================================
// 6. WEBSITE STATE
// ============================================================


let activeCategory = "all";

let selected = null;

let cameraStarted = false;

let cameraRenderRunning = false;

let faceResults = null;

let handResults = null;

let faceMesh = null;

let hands = null;

let overlayImage = null;

let overlayKey = "";

let cameraBusy = false;


// ============================================================
// 7. HTML ELEMENTS
// ============================================================


const video = document.getElementById("video");

const canvas = document.getElementById("overlay");

const feedCanvas = document.getElementById("cameraFeed");

const cameraSelect = document.getElementById("cameraSelect");

const productGrid = document.getElementById("productGrid");

const ctx = canvas
    ? canvas.getContext("2d")
    : null;

const feedCtx = feedCanvas
    ? feedCanvas.getContext("2d", { alpha: false })
    : null;


// ============================================================
// 8. FORMAT PRICE
// ============================================================


function formatPrice(price) {

    return "₹" + price.toLocaleString("en-IN");

}


// ============================================================
// 9. CREATE PRODUCT IMAGE
//
// If a real image URL is entered, use it.
// Otherwise, show the generated jewellery SVG.
// ============================================================


function getProductImage(product) {

    if (product.image && product.image.trim() !== "") {

        return product.image;

    }

    return "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(jewellerySVG(product));

}


// ============================================================
// 10. RENDER PRODUCT COLLECTION
// ============================================================


function renderProducts() {

    if (!productGrid) {

        console.error("productGrid element was not found.");

        return;

    }


    const searchElement =
        document.getElementById("searchInput");


    const searchText =
        searchElement
            ? searchElement.value.toLowerCase().trim()
            : "";


    const filteredProducts = products.filter(product => {

        const categoryMatch =
            activeCategory === "all" ||
            product.cat === activeCategory;


        const searchMatch =
            `${product.name} ${product.cat} ${product.categoryName}`
                .toLowerCase()
                .includes(searchText);


        return categoryMatch && searchMatch;

    });


    productGrid.innerHTML = filteredProducts.map(product => {

        const imageURL = getProductImage(product);


        return `

            <article class="product-card">

                <div class="product-art">

                    <img
                        src="${imageURL}"
                        alt="${product.name}"
                        loading="lazy"
                        onerror="this.onerror=null;this.src='${getSVGFallback(product)}'"
                    >

                </div>


                <div class="product-info">

                    <h3>${product.name}</h3>

                    <p>${formatPrice(product.price)}</p>

                    <button
                        class="try-btn"
                        onclick="selectProduct('${product.id}')"
                    >

                        Try On

                    </button>

                </div>

            </article>

        `;

    }).join("");


    if (filteredProducts.length === 0) {

        productGrid.innerHTML = `
            <p class="empty-products">
                No jewellery found.
            </p>
        `;

    }

}


// ============================================================
// 11. SVG FALLBACK
// ============================================================


function getSVGFallback(product) {

    return "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent(jewellerySVG(product));

}


// ============================================================
// 12. SVG DEFINITIONS
// ============================================================


function svgDefs() {

    return `

    <defs>

        <linearGradient
            id="gold"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
        >

            <stop offset="0" stop-color="#fff4b5"/>

            <stop offset=".25" stop-color="#d99c2d"/>

            <stop offset=".5" stop-color="#fff0a0"/>

            <stop offset=".75" stop-color="#b87418"/>

            <stop offset="1" stop-color="#f4d36a"/>

        </linearGradient>


        <linearGradient
            id="gold2"
            x1="0"
            y1="1"
            x2="1"
            y2="0"
        >

            <stop stop-color="#8c5910"/>

            <stop offset=".4" stop-color="#e7b84d"/>

            <stop offset=".7" stop-color="#fff1a2"/>

            <stop offset="1" stop-color="#b97516"/>

        </linearGradient>


        <radialGradient id="blue">

            <stop stop-color="#ffffff"/>

            <stop offset=".35" stop-color="#dff9ff"/>

            <stop offset=".7" stop-color="#75c9e6"/>

            <stop offset="1" stop-color="#2873a8"/>

        </radialGradient>


        <radialGradient id="red">

            <stop stop-color="#ffb6a9"/>

            <stop offset=".45" stop-color="#cf303c"/>

            <stop offset="1" stop-color="#710d18"/>

        </radialGradient>


        <radialGradient id="green">

            <stop stop-color="#d1ffe4"/>

            <stop offset=".45" stop-color="#20aa6c"/>

            <stop offset="1" stop-color="#075c3c"/>

        </radialGradient>


        <filter
            id="shadow"
            x="-40%"
            y="-40%"
            width="180%"
            height="180%"
        >

            <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="2"
                flood-opacity=".35"
            />

        </filter>

    </defs>

    `;

}


// ============================================================
// 13. GEM STONE
// ============================================================


function stone(x, y, radius, type = "blue") {

    return `

        <circle
            cx="${x}"
            cy="${y}"
            r="${radius}"
            fill="url(#${type})"
            stroke="#fff4c0"
            stroke-width=".8"
            filter="url(#shadow)"
        />

    `;

}


// ============================================================
// 14. JEWELLERY SVG GENERATOR
//
// Used only when a real product image is not supplied.
// ============================================================


function jewellerySVG(product) {

    const variant = product.variant;

    const stoneType =
        variant % 3 === 0
            ? "red"
            : variant % 3 === 1
                ? "blue"
                : "green";


    let content = "";


    // --------------------------------------------------------
    // NOSE PIN
    // --------------------------------------------------------


    if (product.cat === "nosepin") {

        const petals = 3 + (variant % 4);

        for (let i = 0; i < petals; i++) {

            const angle = i * 360 / petals;

            content += `

                <ellipse
                    cx="40"
                    cy="40"
                    rx="${4 + (variant % 3)}"
                    ry="${10 + (variant % 4)}"
                    fill="url(#gold)"
                    transform="rotate(${angle} 40 40)"
                />

            `;

        }


        content += stone(40, 40, 9 + (variant % 3), stoneType);


        content += `

            <path
                d="M49 43 Q57 49 55 58"
                fill="none"
                stroke="url(#gold2)"
                stroke-width="3"
            />

        `;


        return `

            <svg
                viewBox="0 0 80 80"
                xmlns="http://www.w3.org/2000/svg"
            >

                ${svgDefs()}

                ${content}

            </svg>

        `;

    }



    // --------------------------------------------------------
    // EARRINGS
    // --------------------------------------------------------


    if (product.cat === "earring") {

        const drop = 20 + (variant % 6) * 3;

        const shape = variant % 4;


        let design = "";


        if (shape === 0) {

            design = `
                <circle
                    cx="50"
                    cy="${60 + drop}"
                    r="12"
                    fill="url(#gold)"
                />
            `;

        } else if (shape === 1) {

            design = `
                <path
                    d="M50 50 L65 ${75 + drop} L50 ${100 + drop} L35 ${75 + drop} Z"
                    fill="url(#gold)"
                />
            `;

        } else if (shape === 2) {

            design = `
                <ellipse
                    cx="50"
                    cy="${75 + drop}"
                    rx="16"
                    ry="24"
                    fill="none"
                    stroke="url(#gold)"
                    stroke-width="7"
                />
            `;

        } else {

            design = `
                <path
                    d="M50 50 C20 65 35 100 50 110 C65 100 80 65 50 50"
                    fill="url(#gold)"
                />
            `;

        }


        content = `

            <g filter="url(#shadow)">

                <path
                    d="M50 18 C25 35 28 62 50 ${75 + drop}"
                    fill="none"
                    stroke="url(#gold)"
                    stroke-width="6"
                />

                <circle
                    cx="50"
                    cy="18"
                    r="7"
                    fill="url(#gold2)"
                />

                ${design}

                ${stone(50, 75 + drop, 9, stoneType)}

            </g>

        `;


        return `

            <svg
                viewBox="0 0 100 140"
                xmlns="http://www.w3.org/2000/svg"
            >

                ${svgDefs()}

                ${content}

            </svg>

        `;

    }



    // --------------------------------------------------------
    // NECK CHAIN
    // --------------------------------------------------------


    if (product.cat === "chain") {

        const pendantY = 85 + (variant % 5) * 5;

        const curve = 60 + (variant % 6) * 7;

        let beads = "";


        for (let i = 0; i < 15; i++) {

            const x = 10 + i * 12.8;

            const y =
                35 +
                Math.sin(i * (0.35 + variant * 0.02)) * 7;


            beads += `

                <circle
                    cx="${x}"
                    cy="${y}"
                    r="${i % 3 === 0 ? 3 : 2}"
                    fill="url(#gold2)"
                />

            `;

        }


        const pendantShape = variant % 4;


        let pendant = "";


        if (pendantShape === 0) {

            pendant = `
                ${stone(100, pendantY, 15, stoneType)}
            `;

        } else if (pendantShape === 1) {

            pendant = `
                <path
                    d="M100 ${pendantY - 18}
                       L118 ${pendantY}
                       L100 ${pendantY + 18}
                       L82 ${pendantY}
                       Z"
                    fill="url(#gold)"
                />

                ${stone(100, pendantY, 8, stoneType)}
            `;

        } else if (pendantShape === 2) {

            pendant = `
                <circle
                    cx="100"
                    cy="${pendantY}"
                    r="19"
                    fill="none"
                    stroke="url(#gold)"
                    stroke-width="7"
                />

                ${stone(100, pendantY, 9, stoneType)}
            `;

        } else {

            pendant = `
                <path
                    d="M100 ${pendantY - 20}
                       C80 ${pendantY - 4}
                       88 ${pendantY + 18}
                       100 ${pendantY + 20}
                       C112 ${pendantY + 18}
                       120 ${pendantY - 4}
                       100 ${pendantY - 20}"
                    fill="url(#gold)"
                />

                ${stone(100, pendantY, 8, stoneType)}
            `;

        }


        content = `

            <g filter="url(#shadow)">

                <path
                    d="M10 20
                       Q100 ${curve}
                       190 20
                       Q178 100
                       100 110
                       Q22 100
                       10 20"
                    fill="none"
                    stroke="url(#gold)"
                    stroke-width="5"
                />

                ${beads}

                <path
                    d="M80 55 L100 75 L120 55"
                    fill="none"
                    stroke="url(#gold2)"
                    stroke-width="4"
                />

                ${pendant}

            </g>

        `;


        return `

            <svg
                viewBox="0 0 200 125"
                xmlns="http://www.w3.org/2000/svg"
            >

                ${svgDefs()}

                ${content}

            </svg>

        `;

    }



    // --------------------------------------------------------
    // HEAD CHAIN
    // --------------------------------------------------------


    if (product.cat === "headchain") {

        const variation = variant % 4;

        const sideLength = 42 + (variant % 5) * 5;


        content = `

            <g filter="url(#shadow)">

                <path
                    d="M10 ${variation * 3 + 42}
                       Q100 ${5 + variation * 4}
                       190 ${variation * 3 + 42}"
                    fill="none"
                    stroke="url(#gold)"
                    stroke-width="5"
                />

                <path
                    d="M100 15 L100 72"
                    stroke="url(#gold2)"
                    stroke-width="4"
                />

                <path
                    d="M10 42 L${sideLength} 100
                       M190 42 L${200 - sideLength} 100"
                    stroke="url(#gold)"
                    stroke-width="4"
                />

                ${stone(100, 75, 12 + (variant % 4), stoneType)}

                <circle
                    cx="100"
                    cy="75"
                    r="5"
                    fill="#fff"
                    opacity=".7"
                />

            </g>

        `;


        return `

            <svg
                viewBox="0 0 200 115"
                xmlns="http://www.w3.org/2000/svg"
            >

                ${svgDefs()}

                ${content}

            </svg>

        `;

    }



    // --------------------------------------------------------
    // BANGLES
    // --------------------------------------------------------


    if (product.cat === "bangle") {

        let bands = "";


        const bandCount = 2 + (variant % 4);


        for (let i = 0; i < bandCount; i++) {

            const radius = 30 + i * 5;

            bands += `

                <ellipse
                    cx="100"
                    cy="60"
                    rx="${radius + 30}"
                    ry="${radius}"
                    fill="none"
                    stroke="url(#${i % 2 ? "gold2" : "gold"})"
                    stroke-width="${3 + (variant % 3)}"
                />

            `;

        }


        content = `

            <g filter="url(#shadow)">

                ${bands}

                ${stone(100, 25, 6, stoneType)}

                ${stone(100, 95, 6, stoneType)}

            </g>

        `;


        return `

            <svg
                viewBox="0 0 200 120"
                xmlns="http://www.w3.org/2000/svg"
            >

                ${svgDefs()}

                ${content}

            </svg>

        `;

    }


    return "";

}


// ============================================================
// 15. CATEGORY FILTER
// ============================================================


function setCategory(category, element) {

    activeCategory = category;


    document.querySelectorAll(".chip").forEach(chip => {

        chip.classList.remove("active");

    });


    if (element) {

        element.classList.add("active");

    }


    renderProducts();

}


// ============================================================
// 16. SELECT PRODUCT
// ============================================================


function selectProduct(id) {

    selected = products.find(product => product.id === id);


    if (!selected) {

        showToast("Jewellery item not found.");

        return;

    }


    prepareOverlay();


    const selectedPreview =
        document.getElementById("selectedPreview");


    if (selectedPreview) {

        selectedPreview.innerHTML = `

            <div class="preview-symbol">

                <img
                    src="${getProductImage(selected)}"
                    alt="${selected.name}"
                    style="
                        width:120px;
                        height:120px;
                        object-fit:contain;
                    "
                >

            </div>

            <h3>${selected.name}</h3>

            <p>
                ${formatPrice(selected.price)}
                ·
                ${selected.cat}
            </p>

        `;

    }


    scrollToTryOn();


    if (!cameraStarted) {

        startCamera();

    }


    showToast(`${selected.name} selected`);

}


// ============================================================
// 17. PREPARE VIRTUAL TRY-ON IMAGE
// ============================================================




function prepareOverlay() {
    if (!selected) {
        overlayImage = null;
        overlayKey = "";
        clearOverlay();
        return;
    }

    // Avoid loading the same image repeatedly.
    if (
        overlayKey === selected.id &&
        overlayImage &&
        overlayImage.complete &&
        overlayImage.naturalWidth > 0
    ) {
        drawOverlay();
        return;
    }

    overlayKey = selected.id;
    overlayImage = null;
    clearOverlay();

    // Use a dedicated transparent try-on image when provided.
    // Otherwise use the generated transparent SVG, NOT the
    // ordinary product photograph with its background.
    const url = selected.tryOnImage &&
                selected.tryOnImage.trim() !== ""
        ? selected.tryOnImage
        : getSVGFallback(selected);

    const image = new Image();

    image.onload = () => {
        if (!selected || selected.id !== overlayKey) return;

        overlayImage = image;
        drawOverlay();
    };

    image.onerror = () => {
        if (selected && selected.id === overlayKey) {
            overlayImage = null;
            clearOverlay();
            showToast(
                "Try-on image failed to load. Check its image URL."
            );
        }
    };

    image.src = url;
}




// ============================================================
// 18. SCROLL TO TRY-ON
// ============================================================


function scrollToTryOn() {

    const tryOnSection =
        document.getElementById("tryon");


    if (tryOnSection) {

        tryOnSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ============================================================
// 19. LOAD EXTERNAL TRACKING LIBRARY
// ============================================================


function loadExternalScript(src) {

    return new Promise((resolve, reject) => {

        const existing =
            document.querySelector(`script[src="${src}"]`);


        if (existing) {

            if (existing.dataset.loaded === "true") {

                resolve();

            } else {

                existing.addEventListener("load", resolve, {
                    once: true
                });

                existing.addEventListener("error", reject, {
                    once: true
                });

            }

            return;

        }


        const script = document.createElement("script");

        script.src = src;

        script.async = true;

        script.crossOrigin = "anonymous";


        script.onload = () => {

            script.dataset.loaded = "true";

            resolve();

        };


        script.onerror = reject;


        document.head.appendChild(script);

    });

}


// ============================================================
// 20. LOAD FACE AND HAND TRACKING
// ============================================================


async function loadTrackingLibraries() {

    try {

        await loadExternalScript(
            "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js"
        );


        await loadExternalScript(
            "https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js"
        );


        setupTracking();


    } catch (error) {

        console.error(
            "Tracking library loading failed:",
            error
        );


        showToast(
            "Camera works, but jewellery tracking could not load."
        );

    }

}


// ============================================================
// 21. START CAMERA
// ============================================================


async function startCamera(deviceId = "") {

    const message =
        document.getElementById("cameraMessage");


    if (!video) {

        showCameraError(
            "The video element was not found. Check your index.html."
        );

        return;

    }


    if (!navigator.mediaDevices?.getUserMedia) {

        showCameraError(
            "Camera is not supported. Open the website using VS Code Live Server."
        );

        return;

    }


    stopCameraStream();


    if (message) {

        message.style.display = "flex";

        message.innerHTML = `

            <div class="camera-icon">📷</div>

            <h3>Starting camera...</h3>

            <p>Please allow camera access.</p>

        `;

    }


    try {

        // ----------------------------------------------------
        // Request the selected camera.
        // Do not depend on camera names being exposed.
        // ----------------------------------------------------


        let constraints = {

            video: {

                width: {
                    ideal: 1280
                },

                height: {
                    ideal: 720
                },

                frameRate: {
                    ideal: 30
                }

            },

            audio: false

        };


        if (deviceId) {

            constraints.video.deviceId = {
                exact: deviceId
            };

        } else {

            constraints.video.facingMode = "user";

        }


        const stream =
            await navigator.mediaDevices.getUserMedia(
                constraints
            );


        const track =
            stream.getVideoTracks()[0];


        if (!track) {

            stream.getTracks().forEach(t => t.stop());

            throw new Error(
                "Camera did not return a video track."
            );

        }


        window.activeCameraStream = stream;


        // ----------------------------------------------------
        // Attach camera stream to video element.
        // ----------------------------------------------------


        video.srcObject = stream;

        video.muted = true;

        video.autoplay = true;

        video.playsInline = true;


        video.setAttribute("autoplay", "");

        video.setAttribute("muted", "");

        video.setAttribute("playsinline", "");


        // ----------------------------------------------------
        // IMPORTANT: make sure video is not hidden.
        // ----------------------------------------------------


        video.style.display = "block";

        video.style.visibility = "visible";

        video.style.opacity = "1";


        await waitForVideoMetadata(video, 10000);


        await video.play();


        // ----------------------------------------------------
        // Wait for actual camera frames.
        // ----------------------------------------------------


        const frameAvailable =
            await waitForRealFrame(video, 8000);


        if (!frameAvailable) {

            throw new Error(
                "Camera connected, but no video frames were received. Check Windows camera privacy settings."
            );

        }


        resizeCanvas();


        cameraStarted = true;


        // Hide the camera loading/error message.
        if (message) {

            message.style.display = "none";

        }


        startCameraRenderer();


        await populateCameraList();


        showToast(
            "Camera started successfully."
        );


        // Load face and hand tracking.
        loadTrackingLibraries();


    } catch (error) {

        console.error("Camera error:", error);


        stopCameraStream();


        let errorMessage =
            "Unable to start camera.";


        if (
            error.name === "NotAllowedError" ||
            error.name === "PermissionDeniedError"
        ) {

            errorMessage =
                "Camera permission denied. Click the camera icon in the browser address bar and allow camera access.";

        } else if (
            error.name === "NotFoundError" ||
            error.name === "DevicesNotFoundError"
        ) {

            errorMessage =
                "No camera was found. Check that your laptop webcam is enabled.";

        } else if (
            error.name === "NotReadableError" ||
            error.name === "TrackStartError"
        ) {

            errorMessage =
                "Camera is being used by another app. Close Windows Camera, Teams, Zoom, WhatsApp, or other camera apps.";

        } else if (error.message) {

            errorMessage = error.message;

        }


        showCameraError(errorMessage);

    }

}


// ============================================================
// 22. WAIT FOR VIDEO METADATA
// ============================================================


function waitForVideoMetadata(videoElement, timeout = 8000) {

    return new Promise((resolve, reject) => {

        if (
            videoElement.readyState >= 1 &&
            videoElement.videoWidth > 0
        ) {

            resolve();

            return;

        }


        let finished = false;


        const cleanup = () => {

            videoElement.removeEventListener(
                "loadedmetadata",
                onReady
            );

            videoElement.removeEventListener(
                "canplay",
                onReady
            );

            clearTimeout(timer);

        };


        const onReady = () => {

            if (finished) return;


            if (videoElement.videoWidth > 0) {

                finished = true;

                cleanup();

                resolve();

            }

        };


        const timer = setTimeout(() => {

            if (finished) return;


            finished = true;

            cleanup();


            reject(
                new Error(
                    "Camera opened but video dimensions are unavailable."
                )
            );

        }, timeout);


        videoElement.addEventListener(
            "loadedmetadata",
            onReady
        );

        videoElement.addEventListener(
            "canplay",
            onReady
        );

    });

}


// ============================================================
// 23. WAIT FOR REAL CAMERA FRAME
// ============================================================


function waitForRealFrame(videoElement, timeout = 8000) {

    return new Promise(resolve => {

        let finished = false;


        const finish = value => {

            if (finished) return;


            finished = true;

            clearTimeout(timer);

            resolve(value);

        };


        const timer = setTimeout(() => {

            finish(false);

        }, timeout);


        const check = () => {

            if (
                videoElement.videoWidth > 0 &&
                videoElement.videoHeight > 0 &&
                videoElement.readyState >= 2
            ) {

                finish(true);

            } else if (!finished) {

                requestAnimationFrame(check);

            }

        };


        requestAnimationFrame(check);

    });

}


// ============================================================
// 24. CAMERA RENDERER
//
// This continuously draws the live camera feed to cameraFeed.
// ============================================================


function startCameraRenderer() {

    if (cameraRenderRunning) return;


    cameraRenderRunning = true;


    function render() {

        if (
            !cameraStarted ||
            !window.activeCameraStream
        ) {

            cameraRenderRunning = false;

            return;

        }


        if (
            video.readyState >= 2 &&
            video.videoWidth > 0 &&
            video.videoHeight > 0 &&
            feedCanvas &&
            feedCtx
        ) {

            const width = video.videoWidth;

            const height = video.videoHeight;


            if (
                feedCanvas.width !== width ||
                feedCanvas.height !== height
            ) {

                feedCanvas.width = width;

                feedCanvas.height = height;

            }


            // ------------------------------------------------
            // Draw live video.
            // ------------------------------------------------


            feedCtx.clearRect(
                0,
                0,
                width,
                height
            );


            feedCtx.save();


            // Mirror camera view like a selfie camera.
            feedCtx.translate(width, 0);

            feedCtx.scale(-1, 1);


            feedCtx.drawImage(
                video,
                0,
                0,
                width,
                height
            );


            feedCtx.restore();


            // ------------------------------------------------
            // Draw jewellery overlay.
            // ------------------------------------------------


            if (canvas) {

                feedCtx.drawImage(
                    canvas,
                    0,
                    0,
                    width,
                    height
                );

            }

        }


        requestAnimationFrame(render);

    }


    requestAnimationFrame(render);

}


// ============================================================
// 25. CAMERA LIST
// ============================================================


async function populateCameraList() {

    if (
        !cameraSelect ||
        !navigator.mediaDevices?.enumerateDevices
    ) {

        return;

    }


    try {

        const devices =
            await navigator.mediaDevices.enumerateDevices();


        const cameras =
            devices.filter(device =>
                device.kind === "videoinput"
            );


        const currentDevice =
            window.activeCameraStream
                ?.getVideoTracks?.()[0]
                ?.getSettings?.()
                ?.deviceId || "";


        cameraSelect.innerHTML = "";


        cameras.forEach((camera, index) => {

            const option =
                document.createElement("option");


            option.value = camera.deviceId;


            option.textContent =
                camera.label ||
                `Camera ${index + 1}`;


            if (
                camera.deviceId === currentDevice
            ) {

                option.selected = true;

            }


            cameraSelect.appendChild(option);

        });


    } catch (error) {

        console.error(
            "Unable to list cameras:",
            error
        );

    }

}


// ============================================================
// 26. CHANGE CAMERA
// ============================================================


async function changeCamera() {

    const deviceId =
        cameraSelect?.value || "";


    await startCamera(deviceId);

}


// ============================================================
// 27. STOP CAMERA
// ============================================================


function stopCameraStream() {

    if (window.activeCameraStream) {

        window.activeCameraStream
            .getTracks()
            .forEach(track => {

                try {

                    track.stop();

                } catch (error) {

                    console.warn(error);

                }

            });


        window.activeCameraStream = null;

    }


    if (video) {

        try {

            video.pause();

            video.srcObject = null;

        } catch (error) {

            console.warn(error);

        }

    }


    cameraStarted = false;

    cameraRenderRunning = false;

}


// ============================================================
// 28. SETUP FACE AND HAND TRACKING
// ============================================================


function setupTracking() {

    if (
        typeof FaceMesh === "undefined" ||
        typeof Hands === "undefined"
    ) {

        console.warn(
            "MediaPipe tracking libraries are not available."
        );

        return;

    }


    // --------------------------------------------------------
    // FACE MESH
    // --------------------------------------------------------


    faceMesh = new FaceMesh({

        locateFile: file =>

            `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`

    });


    faceMesh.setOptions({

        maxNumFaces: 1,

        refineLandmarks: true,

        minDetectionConfidence: 0.6,

        minTrackingConfidence: 0.6

    });


    faceMesh.onResults(results => {

        faceResults = results;

        drawOverlay();

    });


    // --------------------------------------------------------
    // HAND TRACKING
    // --------------------------------------------------------


    hands = new Hands({

        locateFile: file =>

            `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`

    });


    hands.setOptions({

        maxNumHands: 2,

        modelComplexity: 0,

        minDetectionConfidence: 0.55,

        minTrackingConfidence: 0.55

    });


    hands.onResults(results => {

        handResults = results;

        drawOverlay();

    });


    // --------------------------------------------------------
    // TRACKING LOOP
    // --------------------------------------------------------


    let lastTrackingTime = 0;


    
async function trackingLoop(now) {
    requestAnimationFrame(trackingLoop);

    if (!cameraStarted ||
        !video ||
        video.readyState < 2 ||
        cameraBusy) {
        return;
    }

    if (now - lastTrackingTime < 55) return;

    lastTrackingTime = now;
    cameraBusy = true;

    try {
        if (selected?.cat === "bangle") {
            await hands.send({ image: video });
        } else {
            await faceMesh.send({ image: video });
        }
    } catch (error) {
        console.warn("Tracking error:", error);
    } finally {
        cameraBusy = false;
    }
}



    requestAnimationFrame(trackingLoop);

}


// ============================================================
// 29. RESIZE CANVAS
// ============================================================


function resizeCanvas() {

    if (!video) return;


    const width =
        video.videoWidth || 640;


    const height =
        video.videoHeight || 480;


    if (canvas) {

        canvas.width = width;

        canvas.height = height;

    }


    if (feedCanvas) {

        feedCanvas.width = width;

        feedCanvas.height = height;

    }

}


// ============================================================
// 30. FACE LANDMARK HELPER
// ============================================================


function P(points, index) {

    const point = points[index];


    return {

        x: (1 - point.x) * canvas.width,

        y: point.y * canvas.height

    };

}


// ============================================================
// 31. FACE WIDTH
// ============================================================


function faceWidth(points) {

    return Math.abs(
        P(points, 454).x -
        P(points, 234).x
    );

}


// ============================================================
// 32. CLEAR OVERLAY
// ============================================================


function clearOverlay() {

    if (!ctx || !canvas) return;


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

}


// ============================================================
// 33. DRAW JEWELLERY OVERLAY
// ============================================================



/* =========================================================
   VIRTUAL TRY-ON DRAWING — ALL FIVE CATEGORIES
   Requires the existing canvas, ctx, selected,
   overlayImage, faceResults, handResults and P() variables.
   ========================================================= */

function drawOverlay() {
    clearOverlay();

    if (!selected || !overlayImage ||
        !overlayImage.complete ||
        !overlayImage.naturalWidth ||
        !canvas || !ctx) {
        return;
    }

    if (selected.cat === "bangle") {
        drawBangleImage();
        return;
    }

    const points = faceResults?.multiFaceLandmarks?.[0];
    if (!points) return;

    switch (selected.cat) {
        case "chain":
            drawChainImage(points);
            break;

        case "earring":
            drawEarringImage(points);
            break;

        case "nosepin":
            drawNoseImage(points);
            break;

        case "headchain":
            drawHeadImage(points);
            break;
    }
}

// Convert a MediaPipe landmark to the mirrored canvas coordinates.
function P(points, index) {
    const point = points?.[index];

    if (!point || !canvas) {
        return { x: 0, y: 0 };
    }

    return {
        x: (1 - point.x) * canvas.width,
        y: point.y * canvas.height
    };
}

function faceWidth(points) {
    const left = P(points, 234);
    const right = P(points, 454);

    return Math.abs(right.x - left.x);
}

function drawImg(image, x, y, width, height, angle = 0) {
    if (!ctx || !image ||
        !image.complete || !image.naturalWidth) {
        return;
    }

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.drawImage(
        image,
        -width / 2,
        -height / 2,
        width,
        height
    );
    ctx.restore();
}

// 1. NECK CHAIN — below the chin, around the neck
function drawChainImage(points) {
    const leftJaw = P(points, 234);
    const rightJaw = P(points, 454);
    const chin = P(points, 152);

    const fw = faceWidth(points);
    const centerX = (leftJaw.x + rightJaw.x) / 2;

    // Lower the necklace towards the base of the neck.
    const centerY = chin.y + fw * 0.43;

    const width = Math.max(
        125,
        Math.min(290, fw * 0.95)
    );

    const height = width * 0.60;

    drawImg(
        overlayImage,
        centerX,
        centerY,
        width,
        height
    );
}

// 2. EARRING — place one earring near each ear
// Best input: a transparent PNG of ONE earring.
function drawEarringImage(points) {
    const fw = faceWidth(points);

    // Approximate ear locations on the two sides of the face.
    const leftEar = P(points, 127);
    const rightEar = P(points, 356);

    const size = Math.max(
        24,
        Math.min(85, fw * 0.19)
    );

    // Slightly below the ear attachment points.
    const drop = fw * 0.035;

    drawImg(
        overlayImage,
        leftEar.x,
        leftEar.y + drop,
        size,
        size * 1.15
    );

    drawImg(
        overlayImage,
        rightEar.x,
        rightEar.y + drop,
        size,
        size * 1.15
    );
}

// 3. NOSE PIN — a small image on one nostril
function drawNoseImage(points) {
    const leftNostril = P(points, 98);
    const rightNostril = P(points, 327);

    // Select one side only; do not draw two nose pins.
    const nose = selected.variant % 2
        ? leftNostril
        : rightNostril;

    const fw = faceWidth(points);

    const size = Math.max(
        10,
        Math.min(27, fw * 0.065)
    );

    drawImg(
        overlayImage,
        nose.x,
        nose.y + fw * 0.008,
        size,
        size
    );
}

// 4. HEAD CHAIN — across the forehead
function drawHeadImage(points) {
    const left = P(points, 234);
    const right = P(points, 454);
    const forehead = P(points, 10);

    const fw = faceWidth(points);
    const centerX = (left.x + right.x) / 2;

    const width = Math.max(
        120,
        Math.min(300, fw * 0.95)
    );

    const height = width * 0.48;

    // Keep the ornament near the hairline/forehead.
    const centerY = forehead.y + fw * 0.17;

    drawImg(
        overlayImage,
        centerX,
        centerY,
        width,
        height
    );
}

// 5. BANGLE — around the wrist of a detected hand
function drawBangleImage() {
    const detectedHands =
        handResults?.multiHandLandmarks || [];

    if (!detectedHands.length) return;

    detectedHands.forEach(hand => {
        const wrist = P(hand, 0);
        const indexBase = P(hand, 5);
        const littleBase = P(hand, 17);

        // Estimate wrist direction from the hand landmarks.
        const angle = Math.atan2(
            indexBase.y - wrist.y,
            indexBase.x - wrist.x
        );

        const wristWidth = Math.hypot(
            indexBase.x - littleBase.x,
            indexBase.y - littleBase.y
        );

        const size = Math.max(
            35,
            Math.min(100, wristWidth * 1.5)
        );

        // Place near the wrist, slightly towards the forearm.
        const centerX = wrist.x - Math.cos(angle) * size * 0.16;
        const centerY = wrist.y - Math.sin(angle) * size * 0.16;

        drawImg(
            overlayImage,
            centerX,
            centerY,
            size * 1.35,
            size * 0.70,
            angle
        );
    });
}



// ============================================================
// 34. DRAW IMAGE HELPER
// ============================================================


function drawImg(
    image,
    x,
    y,
    width,
    height,
    angle = 0
) {

    if (!ctx || !image) return;


    ctx.save();


    ctx.translate(x, y);


    ctx.rotate(angle);


    ctx.drawImage(
        image,
        -width / 2,
        -height / 2,
        width,
        height
    );


    ctx.restore();

}


// ============================================================
// 35. NOSE PIN POSITION
// ============================================================


function drawNoseImage(points) {

    const leftNose =
        P(points, 98);


    const rightNose =
        P(points, 327);


    const side =
        selected.variant % 2
            ? leftNose
            : rightNose;


    const width =
        faceWidth(points);


    const scale =
        Math.max(
            0.55,
            Math.min(
                1.1,
                width / 380
            )
        );


    drawImg(

        overlayImage,

        side.x,

        side.y + 2,

        42 * scale,

        42 * scale

    );

}


// ============================================================
// 36. EARRING POSITION
// ============================================================


function drawEarringImage(points) {

    const width =
        faceWidth(points);


    const left =
        P(points, 234);


    const right =
        P(points, 454);


    const centerX =
        (left.x + right.x) / 2;


    const centerY =
        (
            P(points, 127).y +
            P(points, 356).y
        ) / 2 + 10;


    const imageWidth =
        Math.max(
            150,
            Math.min(
                270,
                width * 1.05
            )
        );


    drawImg(

        overlayImage,

        centerX,

        centerY,

        imageWidth,

        imageWidth * 0.6

    );

}


// ============================================================
// 37. NECK CHAIN POSITION
// ============================================================



function drawChainImage(pts) {
  if (!overlayImage || !overlayImage.complete ||
      !overlayImage.naturalWidth) return;

  const leftJaw = P(pts, 234);
  const rightJaw = P(pts, 454);
  const chin = P(pts, 152);

  const fw = faceWidth(pts);
  const cx = (leftJaw.x + rightJaw.x) / 2;

  // Position the chain below the chin.
  const y = chin.y + fw * 0.25;

  // Adjust necklace size to the face width.
  const w = Math.max(140, Math.min(300, fw * 0.95));
  const h = w * 0.45;

  ctx.save();
  ctx.globalAlpha = 0.98;
  ctx.drawImage(
    overlayImage,
    cx - w / 2,
    y - h * 0.35,
    w,
    h
  );
  ctx.restore();
}



// ============================================================
// 38. HEAD CHAIN POSITION
// ============================================================


function drawHeadImage(points) {

    const left =
        P(points, 234);


    const right =
        P(points, 454);


    const top =
        P(points, 10);


    const width =
        faceWidth(points);


    const centerX =
        (left.x + right.x) / 2;


    const y =
        Math.max(
            65,
            top.y + width * 0.18
        );


    const imageWidth =
        Math.max(
            190,
            Math.min(
                380,
                width * 1.05
            )
        );


    drawImg(

        overlayImage,

        centerX,

        y,

        imageWidth,

        imageWidth * 0.575

    );

}


// ============================================================
// 39. BANGLE POSITION
// ============================================================


function drawBangleImage() {

    const handLandmarks =
        handResults
            ?.multiHandLandmarks || [];


    if (!handLandmarks.length) {

        return;

    }


    handLandmarks.forEach(hand => {

        const wrist =
            P(hand, 0);


        const indexFinger =
            P(hand, 5);


        const angle =
            Math.atan2(

                indexFinger.y - wrist.y,

                indexFinger.x - wrist.x

            );


        const distance =
            Math.hypot(

                indexFinger.x - wrist.x,

                indexFinger.y - wrist.y

            );


        const size =
            Math.max(
                70,
                Math.min(
                    150,
                    distance * 2.2
                )
            );


        drawImg(

            overlayImage,

            wrist.x,

            wrist.y,

            size,

            size * 0.6,

            angle

        );

    });

}


// ============================================================
// 40. CAPTURE PHOTO
// ============================================================


function capturePhoto() {

    if (!cameraStarted) {

        showToast(
            "Start the camera first."
        );

        return;

    }


    if (!feedCanvas) {

        showToast(
            "Camera canvas was not found."
        );

        return;

    }


    const output =
        document.createElement("canvas");


    output.width =
        feedCanvas.width;


    output.height =
        feedCanvas.height;


    const outputContext =
        output.getContext("2d");


    outputContext.drawImage(

        feedCanvas,

        0,

        0

    );


    if (canvas) {

        outputContext.drawImage(

            canvas,

            0,

            0

        );

    }


    const link =
        document.createElement("a");


    link.download =
        "jewelaura-try-on.png";


    link.href =
        output.toDataURL("image/png");


    link.click();


    showToast(
        "Try-on photo captured!"
    );

}


// ============================================================
// 41. REMOVE SELECTED JEWELLERY
// ============================================================


function clearTryOn() {

    selected = null;


    overlayImage = null;


    overlayKey = "";


    clearOverlay();


    const preview =
        document.getElementById("selectedPreview");


    if (preview) {

        preview.innerHTML = `

            <div class="preview-symbol">

                💎

            </div>

            <h3>No jewellery selected</h3>

            <p>
                Choose a design from the collection.
            </p>

        `;

    }


    showToast(
        "Jewellery removed"
    );

}


// ============================================================
// 42. CAMERA ERROR MESSAGE
// ============================================================


function setCameraMessage(
    title,
    text
) {

    const box =
        document.getElementById("cameraMessage");


    if (!box) return;


    box.innerHTML = `

        <div class="camera-icon">

            📷

        </div>

        <h3>${title}</h3>

        <p>${text}</p>

        <button
            class="primary"
            onclick="startCamera()"
        >

            ▶ Try Again

        </button>

    `;


    box.style.display = "flex";

}


// ============================================================
// 43. CAMERA ERROR
// ============================================================


function showCameraError(message) {

    cameraStarted = false;


    setCameraMessage(

        "Camera could not start",

        message

    );


    showToast(
        "Camera could not start"
    );

}


// ============================================================
// 44. TOAST MESSAGE
// ============================================================


function showToast(message) {

    const toast =
        document.getElementById("toast");


    if (!toast) {

        console.log(message);

        return;

    }


    toast.textContent = message;


    toast.classList.add("show");


    clearTimeout(
        window.toastTimer
    );


    window.toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


// ============================================================
// 45. SEARCH EVENT
// ============================================================


const searchInput =
    document.getElementById("searchInput");


if (searchInput) {

    searchInput.addEventListener(
        "input",
        renderProducts
    );

}


// ============================================================
// 46. CAMERA SELECT EVENT
// ============================================================


if (cameraSelect) {

    cameraSelect.addEventListener(
        "change",
        changeCamera
    );

}


// ============================================================
// 47. STOP CAMERA WHEN PAGE CLOSES
// ============================================================


window.addEventListener(
    "beforeunload",
    stopCameraStream
);


// ============================================================
// 48. INITIALIZE WEBSITE
// ============================================================


renderProducts();


console.log(
    "JewelAura initialized successfully."
);


console.log(
    "Total jewellery products:",
    products.length
);