import React from "react";
// import { Helmet } from "react-helmet-async";
import { Helmet } from "react-helmet";

const RefinanceDecisionGuidePage = () => {
    const pageUrl =
        "https://aviar-finance-service.vercel.app/resources/refinance-decision-guide";
    const pageTitle =
        "Mortgage Refinance Decision Guide | AVIAR Financial Services Bloomington IL";
    const pageDescription =
        "Should you refinance your mortgage? Use this refinance decision guide from AVIAR Financial Services to evaluate rate savings, term changes, cash-out options, and break-even analysis.";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Refinance Decision Guide",
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
                    lineHeight: 1.7,
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
                        Refinance Decision Guide
                    </h1>
                    <p
                        style={{
                            fontSize: "1.05rem",
                            maxWidth: "650px",
                            margin: "0 auto",
                            color: "#1b2e4d",
                        }}
                    >
                        A practical framework to decide whether refinancing your mortgage makes
                        sense based on rate, term, equity, and your long-term plans.
                    </p>
                </header>

                {/* ---------- SECTIONS ---------- */}
                {[
                    {
                        title: "Why People Refinance",
                        content: (
                            <>
                                <p>Homeowners typically refinance to:</p>
                                <ul>
                                    <li>Lower their interest rate and monthly payment</li>
                                    <li>Change the loan term</li>
                                    <li>Access equity through a cash-out refinance</li>
                                    <li>Remove or reduce mortgage insurance</li>
                                    <li>Switch from an ARM to a fixed-rate loan</li>
                                    <li>Remove a co-borrower from the loan</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        title: "Reason 1: Lower Your Interest Rate",
                        content: (
                            <>
                                <p>
                                    If current market rates are lower than your existing mortgage
                                    rate, a refinance may reduce your monthly payment and your total
                                    interest over the loan’s life.
                                </p>
                                <p>
                                    AVIAR can compare your current loan vs a new scenario to show
                                    monthly and lifetime savings.
                                </p>
                            </>
                        ),
                    },
                    {
                        title: "Reason 2: Reduce or Remove Mortgage Insurance",
                        content: (
                            <>
                                <p>
                                    Borrowers with FHA or low-down-payment loans often carry
                                    mortgage insurance. If your equity has increased, refinancing
                                    may remove or reduce these costs.
                                </p>
                            </>
                        ),
                    },
                    {
                        title: "Reason 3: Change Your Loan Term",
                        content: (
                            <>
                                <p>Common options include:</p>
                                <ul>
                                    <li><strong>30 → 15 years:</strong> Higher payment, less interest</li>
                                    <li><strong>15 → 30 years:</strong> Lower payment, more flexibility</li>
                                </ul>
                                <p>
                                    A term change aligns your mortgage with your income and
                                    long-term plans.
                                </p>
                            </>
                        ),
                    },
                    {
                        title: "Reason 4: Cash-Out Refinance",
                        content: (
                            <>
                                <p>
                                    A cash-out refinance lets you borrow a higher mortgage amount
                                    and receive the difference as cash.
                                </p>
                                <ul>
                                    <li>Debt consolidation</li>
                                    <li>Home renovation</li>
                                    <li>Major expenses</li>
                                    <li>Real estate investments</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        title: "Reason 5: Switch Loan Types",
                        content: (
                            <>
                                <p>Common examples:</p>
                                <ul>
                                    <li>FHA → Conventional</li>
                                    <li>ARM → Fixed-rate</li>
                                    <li>Interest-only → Fully amortizing</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        title: "Key Questions Before Refinancing",
                        content: (
                            <>
                                <p>Ask yourself:</p>
                                <ul>
                                    <li>How long will I stay in this home?</li>
                                    <li>Has my credit improved?</li>
                                    <li>Has my property value increased?</li>
                                    <li>How will my payoff timeline change?</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        title: "What AVIAR Provides in a Refi Review",
                        content: (
                            <>
                                <p>You’ll receive:</p>
                                <ul>
                                    <li>Current loan snapshot</li>
                                    <li>New loan terms</li>
                                    <li>Monthly savings/costs</li>
                                    <li>Break-even timeline</li>
                                    <li>Cash-out or term-change options</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        title: "Next Steps",
                        content: (
                            <>
                                <p>
                                    Refinancing is part financial, part personal. It should match
                                    your long-term goals.
                                </p>
                                <p>
                                    AVIAR can analyze your statement, run scenarios, and simplify
                                    the decision.
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
                            borderLeft: "5px solid #1e3a8a", // deep navy accent
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

export default RefinanceDecisionGuidePage;
