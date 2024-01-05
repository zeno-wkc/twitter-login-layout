import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <li><Link href="https://about.twitter.com/">About</Link></li>
        <li><Link href="https://help.twitter.com/using-x/download-the-x-app">Download the X app</Link></li>
        <li><Link href="https://help.twitter.com/">Help Center</Link></li>
        <li><Link href="https://twitter.com/tos">Terms of Service</Link></li>
        <li><Link href="https://twitter.com/privacy">Privacy Policy</Link></li>
        <li><Link href="https://support.twitter.com/articles/20170514">Cookie Policy</Link></li>
        <li><Link href="https://help.twitter.com/resources/accessibility">Accessibility</Link></li>
        <li><Link href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo">Ads info</Link></li>
        <li><Link href="https://blog.twitter.com/">Blog</Link></li>
        <li><Link href="https://status.twitterstat.us/">Status</Link></li>
        <li><Link href="https://careers.twitter.com/">Careers</Link></li>
        <li><Link href="https://about.twitter.com/press/brand-assets">Brand Resources</Link></li>
        <li><Link href="https://ads.twitter.com/?ref=gl-tw-tw-twitter-advertise">Advertising</Link></li>
        <li><Link href="https://marketing.twitter.com/">Marketing</Link></li>
        <li><Link href="https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness">X for Business</Link></li>
        <li><Link href="https://developer.twitter.com/">Developers</Link></li>
        <li><Link href="https://twitter.com/i/directory/profiles">Directory</Link></li>
        <li><Link href="https://twitter.com/settings">Settings</Link></li>
        <li>© 2024 X Corp.</li>
      </ul>
    </div>
  )
}