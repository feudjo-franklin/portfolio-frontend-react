export const LegalNoticeModal = () => {
    return (
        <div
            className="modal fade"
            id="legalNotice"
            tabIndex={-1}
            aria-labelledby="legalNoticeLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="legalNoticeLabel">
                            Impressum
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Schließen"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <h6 className="fw-bold">Angaben gemäß § 5 DDG</h6>
                        <p className="mb-3">
                            Franklin Feudjo Tsopni
                            <br />
                            {/* [Straße und Hausnummer] */}
                            {/* <br /> */}
                            {/* [PLZ und Ort] */ }
                            <br />
                            Deutschland
                        </p>

                        <h6 className="fw-bold">Kontakt</h6>
                        <p className="mb-3">
                            Telefon: [+49 15215008272]
                            <br />
                            E-Mail: <a href="mailto:franklinfeudjo1@gmail.com">franklinfeudjo1@gmail.com</a>
                        </p>

                        <h6 className="fw-bold">Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV</h6>
                        <p className="mb-3">
                            Franklin Feudjo Tsopni
                            {/* <br /> */}
                            {/* [Straße und Hausnummer] */}
                            {/* <br /> */}
                            {/* [PLZ und Ort] */}
                        </p>

                        <h6 className="fw-bold">Haftung für Inhalte</h6>
                        <p className="mb-3">
                            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen
                            Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir
                            als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                            rechtswidrige Tätigkeit hinweisen.
                        </p>

                        <h6 className="fw-bold">Haftung für Links</h6>
                        <p className="mb-3">
                            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
                            keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                            Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                            Anbieter oder Betreiber der Seiten verantwortlich.
                        </p>

                        <h6 className="fw-bold">Urheberrecht</h6>
                        <p className="mb-3">
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                            Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                        </p>

                        <h6 className="fw-bold">Hosting</h6>
                        <p className="mb-0">
                            Diese Website wird gehostet bei:
                            <br />
                            Amazon Web Services EMEA SARL
                            <br />
                            38 avenue John F. Kennedy, L-1855 Luxemburg
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};