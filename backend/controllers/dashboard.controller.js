export const getDashboardData = (req, res) => {
    // dummy intern data
    const internData = {
        name: "Shivam Kumar",
        referralCode: "shivam2025",
        donationsRaised: 1200,
        achievements: [
            "Silver Tier Referrer",
            "5 Successful Referrals"
        ]
    };

    res.status(200).json(internData);
};
