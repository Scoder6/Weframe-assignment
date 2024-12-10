import React from 'react';


export function Footer() {
    return (
        <footer className="bg-white text-gray-700 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-8">
                {/* Logo Section */}
                <div>
                    <img
                        src="/weframe-tech.png"
                        alt="Weframe Tech Logo"
                        className="w-32"
                    />
                </div>

                {/* Infos Pratiques Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">INFOS PRATIQUES</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-900">À propos</a></li>
                        <li><a href="#" className="hover:text-gray-900">Livraisons & Reprises</a></li>
                        <li><a href="#" className="hover:text-gray-900">Mode d'emploi</a></li>
                        <li><a href="#" className="hover:text-gray-900">F.A.Q.</a></li>
                    </ul>
                </div>

                {/* Legal Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">LEGAL</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-900">Mentions légales</a></li>
                        <li><a href="#" className="hover:text-gray-900">CGU</a></li>
                        <li><a href="#" className="hover:text-gray-900">CGV</a></li>
                        <li><a href="#" className="hover:text-gray-900">Politique de confidentialité</a></li>
                    </ul>
                </div>

                {/* Mon Compte Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">MON COMPTE</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-900">Accéder à mon compte</a></li>
                        <li><a href="#" className="hover:text-gray-900">Ma liste d'envie</a></li>
                        <li><a href="#" className="hover:text-gray-900">Créer un compte</a></li>
                        <li><a href="#" className="hover:text-gray-900">Mot de passe oublié</a></li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">NOUS SUIVRE</h3>
                    <div className="flex justify-start items-center gap-4">
                        <img
                            src="/Frame%20117.png"
                            alt="Weframe Tech Logo"
                            className="w-32 cursor-pointer"
                        />

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
