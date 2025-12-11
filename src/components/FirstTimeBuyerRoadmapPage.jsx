import React from "react";
// import { Helmet } from "react-helmet-async";
import { Helmet } from "react-helmet";

const FirstTimeBuyerRoadmapPage = () => {
    const pageUrl =
        "https://aviar-finance-service.vercel.app/resources/first-time-buyer-roadmap";
    const pageTitle =
        "First-Time Homebuyer Roadmap in Illinois | AVIAR Financial Services Bloomington IL";
    const pageDescription =
        "Step-by-step roadmap for first-time homebuyers in Illinois: from pre-approval and budgeting to making an offer, inspections, underwriting, and closing with AVIAR Financial Services.";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "First-Time Buyer Roadmap",
        description: pageDescription,
        author: {
            "@type": "Organization",
            name: "AVIAR Financial Services LLC",
        },
        publisher: {
            "@type": "Organization",
            name: "AVIAR Financial Services LLC",
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": pageUrl,
        },
    };

    return (
        <main
            className="page"
            style={{
                padding: "2.5rem 1rem",
                fontFamily: "'Inter', sans-serif",
                background: "#f5f9ff", // soft light blue
                color: "#0b1d39", // deep navy
            }}
        >
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <link rel="canonical" href={pageUrl} />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>

            <div
                className="container"
                style={{
                    maxWidth: "840px",
                    margin: "0 auto",
                    lineHeight: 1.6,
                    paddingBottom: "3rem",
                }}
            >
                {/* ---------- HEADER ---------- */}
                <header
                    style={{
                        marginBottom: "2rem",
                        padding: "2rem 1.5rem",
                        background: "#e7f1ff",
                        borderRadius: "16px",
                        border: "1px solid #d4e4ff",
                        boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
                        textAlign: "center",
                    }}
                >
                    <h1
                        style={{
                            marginBottom: "0.5rem",
                            fontSize: "2.3rem",
                            fontWeight: 800,
                            color: "#0b1d39",
                        }}
                    >
                        First-Time Buyer Roadmap
                    </h1>
                    <p
                        style={{
                            fontSize: "1.05rem",
                            maxWidth: "650px",
                            margin: "0 auto",
                            color: "#1b2e4d",
                        }}
                    >
                        Your step-by-step guide to buying your first home, with a focus on
                        Illinois and Bloomington-area buyers.
                    </p>
                </header>

                {/* ---------- SECTIONS ---------- */}
                {[
                    {
                        title: "Step 1: Get Pre-Approved",
                        content: (
                            <>
                                <p>
                                    A strong pre-approval is the starting point for a confident home
                                    search. AVIAR reviews your income, assets, credit, and goals to
                                    determine a realistic price range and monthly payment.
                                </p>
                                <p>During pre-approval, you typically receive:</p>
                                <ul>
                                    <li>An estimated maximum purchase price</li>
                                    <li>A monthly payment range including taxes & insurance</li>
                                    <li>A pre-approval letter you can use with offers</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        title: "Step 2: Build Your Budget",
                        content: (
                            <>
                                <p>Your true budget is more than just a purchase price. Consider:</p>
                                <ul>
                                    <li>Down payment & closing costs</li>
                                    <li>Property taxes (especially in Illinois)</li>
                                    <li>Insurance, utilities & HOA fees</li>
                                    <li>Loan program: Conventional, FHA, VA, USDA</li>
                                </ul>
                                <p>
                                    AVIAR calculators help you test different price points, down
                                    payments, and tax scenarios.
                                </p>
                            </>
                        ),
                    },
                    {
                        title: "Step 3: Start Your Home Search",
                        content: (
                            <>
                                <p>
                                    Once pre-approved and comfortable with your budget, work with a
                                    real estate agent. Focus on:
                                </p>
                                <ul>
                                    <li>Neighborhoods and school districts</li>
                                    <li>Commute and essential locations</li>
                                    <li>Property tax differences by area</li>
                                    <li>Age and condition of the home</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        title: "Step 4: Make an Offer",
                        content: (
                            <>
                                <p>
                                    Your agent will guide you based on local market conditions and
                                    comparable sales. AVIAR can run updated cost estimates for any
                                    specific home before you sign.
                                </p>
                            </>
                        ),
                    },
                    {
                        title: "Step 5: Attorney Review & Inspections",
                        content: (
                            <>
                                <p>In Illinois, after your offer is accepted:</p>
                                <ul>
                                    <li>Attorneys review and adjust the contract</li>
                                    <li>Inspections are scheduled (general, radon, termite, etc.)</li>
                                    <li>Repairs or credits may be renegotiated</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        title: "Step 6: Appraisal & Underwriting",
                        content: (
                            <>
                                <p>
                                    AVIAR orders an appraisal while underwriting reviews your
                                    documentation. Underwriting verifies:
                                </p>
                                <ul>
                                    <li>Income & employment</li>
                                    <li>Assets and down payment funds</li>
                                    <li>Credit profile</li>
                                    <li>Property value & condition</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        title: "Step 7: Clear to Close",
                        content: (
                            <>
                                <p>
                                    “Clear to close” means final loan approval. You’ll receive a{" "}
                                    <strong>Closing Disclosure</strong> at least three business days
                                    before closing showing:
                                </p>
                                <ul>
                                    <li>Final rate & loan terms</li>
                                    <li>Your monthly payment</li>
                                    <li>Total closing costs & cash needed</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        title: "Step 8: Closing Day",
                        content: (
                            <>
                                <p>On closing day:</p>
                                <ul>
                                    <li>Bring your photo ID</li>
                                    <li>Provide wire confirmation or cashier’s check</li>
                                    <li>Sign all loan and title documents</li>
                                </ul>
                                <p>Once funded — the keys are yours!</p>
                            </>
                        ),
                    },
                    {
                        title: "Step 9: After You Move In",
                        content: (
                            <>
                                <p>After moving in, be sure to:</p>
                                <ul>
                                    <li>Set up autopay with your loan servicer</li>
                                    <li>Confirm your insurance is correct</li>
                                    <li>Update mailing & billing addresses</li>
                                    <li>Store closing documents safely</li>
                                </ul>
                                <p>
                                    AVIAR can also help with future refinances, home equity, or
                                    mortgage planning.
                                </p>
                            </>
                        ),
                    },
                ].map((section, i) => (
                    <section
                        key={i}
                        style={{
                            marginBottom: "2rem",
                            padding: "1.8rem",
                            background: "#ffffff",
                            borderRadius: "14px",
                            boxShadow: "0 6px 16px rgba(63,115,171,0.10)",
                            borderLeft: "5px solid #1e3a8a", // navy accent
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "1.4rem",
                                marginBottom: "1rem",
                                fontWeight: 700,
                                color: "#0b1d39",
                            }}
                        >
                            {section.title}
                        </h2>
                        <div style={{ color: "#1f3558" }}>{section.content}</div>
                    </section>
                ))}
            </div>
        </main>

    );
};

export default FirstTimeBuyerRoadmapPage;
