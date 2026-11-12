import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Scale, ChevronRight, Mail, MessageSquare, Server, ShieldCheck, AlertCircle } from 'lucide-react';
import { SITE_CONFIG, constructMetadata } from '@/lib/seo';
import { CONTACT } from '@/lib/contact';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const PAGE_CANONICAL = 'https://smarterspro12.net/mentions-legales';

export function generateMetadata(): Metadata {
  return constructMetadata({
    title: 'Mentions Légales — IPTV Smarters Pro France',
    description:
      'Consultez les mentions légales de notre plateforme IPTV Smarters Pro France : identification de l\'éditeur, hébergement sécurisé Netlify, propriété intellectuelle et conformité LCEN.',
    canonicalUrl: PAGE_CANONICAL,
  });
}

export default function MentionsLegalesPage() {
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${PAGE_CANONICAL}/#webpage`,
        name: 'Mentions Légales — IPTV Smarters Pro France',
        url: PAGE_CANONICAL,
        description: 'Mentions légales et informations réglementaires conformément à la loi LCEN n° 2004-575 du 21 juin 2004.',
        isPartOf: { '@id': `${SITE_CONFIG.domain}/#website` },
        publisher: { '@id': `${SITE_CONFIG.domain}/#organization` },
        inLanguage: 'fr-FR',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_CANONICAL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_CONFIG.domain },
          { '@type': 'ListItem', position: 2, name: 'Mentions Légales', item: PAGE_CANONICAL },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <Header />

      <nav aria-label="Fil d'Ariane" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 w-full">
        <ol className="flex items-center space-x-2 text-xs text-slate-400">
          <li><Link href="/" className="hover:text-blue-400">Accueil</Link></li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <li><span className="text-slate-200 font-medium" aria-current="page">Mentions Légales</span></li>
        </ol>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 flex-grow w-full">
        <header className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5" />
            <span>Conformité Loi pour la Confiance dans l'Économie Numérique (LCEN)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mentions Légales
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN), les présentes mentions légales précisent l'identité des intervenants dans le cadre de la réalisation et du suivi du site <strong>smarterspro12.net</strong>.
          </p>
        </header>

        {/* Quick Contact & Info Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
              <Mail className="w-4 h-4" />
              <span>Assistance &amp; DPO</span>
            </div>
            <p className="text-xs text-slate-300">
              Pour toute question juridique, administrative ou technique :
            </p>
            <p className="text-sm font-bold text-white tracking-wide">
              <a href={CONTACT.emailUrl} className="hover:text-blue-400 underline">
                {CONTACT.email}
              </a>
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Officiel 7j/7</span>
            </div>
            <p className="text-xs text-slate-300">
              Support réactif et accompagnement direct par messagerie :
            </p>
            <p className="text-sm font-bold text-white tracking-wide">
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 underline">
                {CONTACT.whatsappDisplay}
              </a>
            </p>
          </div>
        </div>

        {/* Legal Sections */}
        <section className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 text-sm text-slate-300 leading-relaxed">
          
          <div>
            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              1. Éditeur du Site Internet
            </h2>
            <p>
              Le site internet accessible à l'adresse <strong>https://smarterspro12.net</strong> est édité et exploité sous la dénomination commerciale <strong>{SITE_CONFIG.legalName}</strong>.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400 text-xs sm:text-sm">
              <li><strong>Nom commercial :</strong> {SITE_CONFIG.name}</li>
              <li><strong>Activité :</strong> Fourniture de services d'assistance technique, configuration d'applications de streaming multimédia et abonnements d'accès IPTV sécurisés.</li>
              <li><strong>Responsable de la publication :</strong> Équipe technique et opérationnelle {SITE_CONFIG.legalName}</li>
              <li><strong>Courrier électronique de contact :</strong> <a href={CONTACT.emailUrl} className="text-blue-400 underline">{CONTACT.email}</a></li>
              <li><strong>Ligne d'assistance WhatsApp :</strong> {CONTACT.whatsappDisplay}</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Server className="w-5 h-5 text-indigo-400" />
              2. Hébergement Web &amp; Infrastructure
            </h2>
            <p>
              Le site web et ses interfaces applicatives sont hébergés auprès d'opérateurs d'infrastructure cloud mondiaux garantissant une haute résilience, un chiffrement TLS 256 bits et une protection anti-DDoS :
            </p>
            <div className="bg-slate-950/60 rounded-xl p-4 mt-2 border border-slate-800/80 text-xs sm:text-sm space-y-1">
              <p><strong>Hébergeur principal (CDN &amp; Edge Delivery) :</strong> Netlify, Inc.</p>
              <p><strong>Adresse du siège :</strong> 510 20th Street, Suite 530, San Francisco, CA 94107, États-Unis</p>
              <p><strong>Site internet :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">www.netlify.com</a></p>
              <p className="text-slate-400 text-xs pt-1">
                L'infrastructure de routage DNS et le réseau de distribution de contenu (CDN) bénéficient également d'une redondance sécurisée Cloudflare Inc.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-400" />
              3. Nature du Service &amp; Avertissement Logiciel Tiers
            </h2>
            <p>
              <strong>IPTV Smarters Pro</strong> est un lecteur multimédia logiciel indépendant développé par des tiers. La plateforme {SITE_CONFIG.domain} fournit un accompagnement à la configuration, une passerelle d'accès optimisée et des paramètres d'abonnement (API Xtream Codes et listes M3U).
            </p>
            <p className="mt-2 text-slate-400 text-xs">
              Le présent site internet n'héberge, ne retransmet et ne stocke directement sur ses serveurs web aucun flux vidéo audiovisuel ni média protégé par des droits d'auteur exclusifs. Pour toute question relative à la propriété intellectuelle, veuillez adresser votre notification à <a href={CONTACT.emailUrl} className="text-blue-400 underline">{CONTACT.email}</a>.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">4. Propriété Intellectuelle</h2>
            <p>
              L'ensemble des contenus graphiques, interfaces, textes rédigés, guides d'installation originaux, logos et code source figurant sur <strong>smarterspro12.net</strong> constituent des créations protégées par les dispositions du Code de la propriété intellectuelle. Toute reproduction, diffusion, modification ou exploitation totale ou partielle sans autorisation écrite préalable est formellement prohibée.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">5. Protection des Données Personnelles (RGPD)</h2>
            <p>
              Les traitements de données à caractère personnel collectées sur ce site (adresses e-mail de commande, coordonnées WhatsApp de livraison) sont soumis aux exigences du Règlement Européen (UE) 2016/679 (RGPD). Aucune donnée bancaire n'est stockée sur nos serveurs.
            </p>
            <p className="mt-2">
              Pour exercer vos droits d'accès, de rectification ou d'effacement, consultez notre <Link href="/privacy" className="text-blue-400 underline">Politique de Confidentialité</Link> ou adressez un message à <a href={CONTACT.emailUrl} className="text-blue-400 underline">{CONTACT.email}</a>.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">6. Limitation de Responsabilité &amp; Réseau</h2>
            <p>
              {SITE_CONFIG.name} met en œuvre des infrastructures de serveurs redondantes dimensionnées pour assurer une disponibilité théorique de 99,9 %. Toutefois, la qualité de diffusion perçue dépend étroitement de la vitesse de connexion internet de l'utilisateur final et d'éventuelles restrictions imposées par les fournisseurs d'accès internet (FAI). En cas de blocage FAI local, des solutions de contournement (DNS 1.1.1.1 ou VPN) sont documentées dans notre <Link href="/guide-installation/contourner-blocage-fai-iptv-dns-vpn" className="text-blue-400 underline">guide dédié</Link>.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">7. Droit Applicable &amp; Règlement Amiable</h2>
            <p>
              Les présentes mentions sont régies par le droit commercial et les normes de la vente en ligne dans l'Union Européenne. En cas de réclamation ou de litige, les parties s'engagent à privilégier une conciliation amiable auprès de notre service client avant toute saisine juridictionnelle.
            </p>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
