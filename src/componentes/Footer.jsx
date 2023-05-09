import { Logo } from './Logo';
import {FooterSection} from './FooterSection'
export function Footer() {
        return <div className="containerfootersection-fluid row">
            <hr size="100px" color="black" />
            <div className="containerfootersection1 col-md-9">
                <Logo />
            </div>
            <div className="containerfootersection2 d-flex col-md-3 gap-5">
                <FooterSection> </FooterSection>
            </div>
        </div>
}