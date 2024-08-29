import Footer from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";

const ApiLicense = () => {
  return (
    <div>
        <NavbarComponent />
      <Container className="text-center py-4">
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="mb-4 bg-secondary">API License Agreement</h1>
            <h2 className="mb-4">Dimp Developers Program</h2>
            <h3 className="mb-4">Terms of Use and API License Agreement</h3>
            <p className="mb-4">
              Thank you for your interest in the Dimp Developers Program (the
              “Program”). Through the Program, Dimp offers various tools,
              content, and services (the “Developer Tools”), including certain
              Dimp Application Programming Interfaces (“APIs”), to manage and
              facilitate the development of applications that use content from
              and interact with Dimp-branded marketplaces around the world.
            </p>
            <p className="mb-4">
              The Program and access to the Developer Tools are provided solely
              for the purpose of promoting and facilitating access to and use of
              Dimp Services (defined below). If Dimp believes you or Your Users
              are using the Developer Tools in any way that undermines
              Dimp&apos;s business interests, Dimp may, at its sole discretion,
              terminate these Terms, suspend your license to use the APIs,
              discontinue your participation in the Program, terminate your
              access to the Developer Tools, and/or reduce your access to all or
              some APIs. These Terms of Use and API License Agreement
              (&apos;&apos;Terms&apos;&apos;) govern your participation in the
              Program, including your license to use the APIs and take effect as
              of the earlier of (a) the date you signify your agreement or (b)
              the date that you first access any Developer Tools or Dimp Content
              (defined below) (the “Effective Date”), These Terms and the
              Developer Tools will change over time, so please check the Dimp
              Developers Program site periodically to see the latest updates.
            </p>
            <p className="mb-4">
              You are contracting with an Dimp company (individually and
              collectively referred to as &apos;&apos;Dimp,&apos;&apos;
              &apos;&apos;we,&apos;&apos; or &apos;&apos;us&apos;&apos;)
              determined by your country of residence. For example and as listed
              in the chart of Dimp companies linked above, if you reside in the
              United States, you are contracting with Dimp Inc.
            </p>
            <p className="mb-4">
              You represent and warrant that you are authorized to act on behalf
              of, and have the authority to bind, the party being issued an
              Application Key (defined below) to these Terms. You and the party
              being issued an Application Key are collectively referred to as
              &apos;&apos;you&apos;&apos; or &apos;&apos;your&apos;&apos; in
              these Terms.
            </p>
            <h4 className="mb-3">DEFINITIONS</h4>
            <ul className="text-left mb-4">
              <li>
                <strong>Application Key(s):</strong> means the confidential
                security keys Dimp provides to you for your use of the API,
                including the developer ID, certificate ID, and application ID.
              </li>
              <li>
                <strong>Application:</strong> means the software application,
                website or other interface that you develop, own or operate to
                interact with the API.
              </li>
              <li>
                <strong>Authorized Use:</strong> has the meaning defined in
                Section 3.1.
              </li>
              <li>
                <strong>Dimp Content:</strong> means all of the information,
                data, content, images, and other material stored by and
                retrieved from Dimp. Dimp Content does not include information
                that you obtain independent of Dimp.
              </li>
              <li>
                <strong>Dimp Services:</strong> means Dimp Sites, including any
                Dimp Content therein, and all other services, applications and
                tools Dimp offers to Dimp Users.
              </li>
              <li>
                <strong>Dimp Site(s):</strong> means any one or all of the
                following: Dimp.com and all international versions thereof that
                are owned, operated, and controlled by Dimp Inc. or its
                subsidiaries (for example, Dimp.de, Dimp.co.uk, Dimp.com.au,
                etc.).
              </li>
              <li>
                <strong>Dimp User:</strong> means any person who accesses any
                Dimp Service, directly or through the Developer Tools.
              </li>
              <li>
                <strong>Dimp User Agreement:</strong> means the terms and
                policies on which Dimp offers Dimp Services to Dimp Users,
                currently available through a link on the homepage of each Dimp
                Site (for example, the Dimp.com User Agreement).
              </li>
              <li>
                <strong>Your Users:</strong> means end-users of your Application
                and anyone who sublicenses your Application.
              </li>
              <li>
                <strong>Personal Information:</strong> means any information
                that directly or indirectly identifies an Dimp User that you
                obtain through your participation in the Program and your use of
                the Developer Tools, including information that you collect
                directly from Your Users in connection with your Application,
                information that is included in Dimp Content, or information
                that you otherwise receive from Dimp about Your Users or other
                Dimp Users and their trading activities.
              </li>
            </ul>
            <h4 className="mb-3">DEVELOPERS PROGRAM CONDITIONS</h4>
            <p className="mb-4">
              Participation in the Program. You may participate in the Program
              and use the Developer Tools to create and use Applications that
              access and/or interact with Dimp Services consistent with the
              Authorized Use and these Terms. You agree that you are solely
              responsible for the Applications that you develop. You agree to
              provide and maintain accurate contact information and you will
              inform us promptly of any updates to your contact information.
            </p>
            <p className="mb-4">
              Application Guidelines. Applications that you develop, display or
              distribute that interact with the API must comply with Dimp&apos;s
              Compatible Application Check requirements, incorporated herein by
              reference.
            </p>
            <p className="mb-4">
              Additional Certifications. Access to certain APIs, Dimp Content
              and increased API call limits may require special certifications.
              You may be responsible for any costs associated with such
              certifications, as well as any modifications necessary for your
              Application to meet certification criteria.
            </p>
            <h4 className="mb-3">LICENSE FOR DEVELOPER TOOLS</h4>
            <p className="mb-4">
              Authorized Use. Dimp grants you a non-exclusive, non-transferable,
              and non-sublicensable (except as expressly permitted herein)
              license to use the Developer Tools solely for the purpose of
              facilitating your own or Your Users&apos; use of Dimp Services,
              such use limited to the following (the “Authorized Use”):
            </p>
            <ul className="text-left mb-4">
              <li>
                Enabling your Application to interact with Dimp&apos;s databases
                (for example, the Dimp public database and the Sandbox Test
                Environment);
              </li>
              <li>
                Making limited intermediate copies of Dimp Content only as
                necessary to perform an activity permitted under these Terms.
                All intermediate copies must be deleted when they are no longer
                required for the purpose for which they were created;
              </li>
              <li>
                Rearranging or reorganizing Dimp Content within your Application
                consistent with these Terms;
              </li>
              <li>Displaying Dimp Content consistent with these Terms; and</li>
              <li>
                Using, displaying or modifying Dimp Content as expressly
                authorized by Your Users and consistent with these Terms.
              </li>
            </ul>
            <p className="mb-4">
              Application Keys. Dimp will provide you with Application Keys that
              permit you to access Dimp&apos;s databases. You may not share or
              transfer your Application Keys to any third party without
              Dimp&apos;s prior written consent. The Application Keys are the
              property of Dimp and may be revoked at any time by Dimp.
            </p>
            <p className="mb-4">
              API Call Limitations. Dimp reserves the right to limit the number
              of periodic API calls you are allowed to make. Dimp may
              temporarily suspend your access to the API if you exceed API call
              limits. Attempts to circumvent API call limits may result in
              termination of these Terms, suspension of your license to use the
              APIs, discontinuance of your participation in the Program,
              termination of your access to the Developer Tools, and/or
              reduction of your access to all or some APIs. Unused API calls
              will not roll over to the next call limit period.
            </p>
            <p className="mb-4">
              Loyalty Program Badges. Dimp grants you a non-exclusive,
              non-transferable and non-sublicensable license to display certain
              Dimp Loyalty Program Badges as set forth in the Dimp Badge Usage
              Terms, incorporated herein by this reference (&apos;Loyalty
              Program Badges&apos;). Dimp may update these requirements from
              time to time, and you must ensure compliance with current
              standards.
            </p>
            <h4 className="mb-3">WORKING WITH THIRD PARTIES</h4>
            <p className="mb-4">
              Service Providers. You may work with service providers as
              necessary to facilitate your performance under these Terms but
              only if you require your service providers to comply with all of
              the conditions and restrictions of these Terms. You acknowledge
              and agree that any act or omission by your service provider(s)
              amounting to a breach of these Terms will be deemed a breach by
              you.
            </p>
            <p className="mb-4">
              Sublicensing. Except as set forth in this Section 4.2, all license
              rights (under any applicable intellectual property right) granted
              to you by Dimp are not sub-licensable, transferable or assignable.
              You may sublicense your right to display the Dimp Content to Your
              Users and to use Dimp Content in your Application, only if (a) you
              provide Dimp with a written notice of such sublicense before you
              sublicense your rights and (b) such sublicense does not transfer
              or assign any license rights to any third party. Your Users’ use
              of Dimp Content must be limited to Authorized Use only.
            </p>
            <h4 className="mb-3">RESTRICTIONS</h4>
            <p className="mb-4">Use of Dimp Content. You must not:</p>
            <ul className="text-left mb-4">
              <li>
                Use Dimp Content in any manner that is inconsistent with these
                Terms or that competes with Dimp;
              </li>
              <li>
                Alter, modify, or create derivative works of Dimp Content,
                except as necessary to display the Dimp Content within your
                Application;
              </li>
              <li>
                Use any of Dimp&apos;s trademarks, logos, or trade names except
                as specifically authorized by Dimp;
              </li>
              <li>
                Use Dimp Content in any manner that could confuse or mislead
                Dimp Users, including using Dimp Content to create or support
                any application that could be mistaken for an Dimp-branded
                service;
              </li>
              <li>
                Use Dimp Content to promote, facilitate or execute any activity
                that would be illegal or otherwise violate Dimp&apos;s User
                Agreement;
              </li>
              <li>
                Access Dimp Content for any purpose other than the Authorized
                Use or to extract or retrieve data from Dimp&apos;s databases in
                an automated manner;
              </li>
              <li>
                Use Dimp Content to provide an equivalent or competing service
                to Dimp;
              </li>
              <li>
                Use Dimp Content for any purpose that could result in the
                deprecation of Dimp&apos;s services or the degradation of Dimp
                Content or services; or
              </li>
              <li>
                Access, or attempt to access, Dimp Content using any method
                other than the APIs or tools provided by Dimp for that purpose.
              </li>
            </ul>
            <h4 className="mb-3">TERM AND TERMINATION</h4>
            <p className="mb-4">
              Term. These Terms will commence on the Effective Date and will
              remain in effect until terminated by either party.
            </p>
            <p className="mb-4">
              Termination. Either party may terminate these Terms at any time
              upon written notice. Upon termination, you must cease all use of
              the Developer Tools and Dimp Content and destroy all copies of
              Dimp Content in your possession. Dimp may terminate your access to
              the Developer Tools and/or APIs, or suspend your participation in
              the Program, if you breach these Terms or if Dimp reasonably
              believes you are violating the Authorized Use.
            </p>
            <h4 className="mb-3">GENERAL PROVISIONS</h4>
            <p className="mb-4">
              Changes to Terms. Dimp may modify these Terms at any time. Dimp
              will notify you of any material changes to these Terms. Continued
              use of the Developer Tools and/or APIs after such modifications
              constitutes acceptance of the modified Terms.
            </p>
            <p className="mb-4">
              Compliance with Laws. You agree to comply with all applicable laws
              and regulations in connection with your participation in the
              Program and use of the Developer Tools.
            </p>
            <p className="mb-4">
              No Warranty. Dimp provides the Developer Tools and Dimp Content
              &apos;&apos;as is&apos;&apos; and makes no warranties, express or
              implied, including but not limited to any implied warranties of
              merchantability, fitness for a particular purpose, or
              non-infringement.
            </p>
            <p className="mb-4">
              Limitation of Liability. In no event will Dimp be liable for any
              indirect, incidental, special, consequential, or punitive damages
              arising out of or related to these Terms, even if Dimp has been
              advised of the possibility of such damages.
            </p>
            <p className="mb-4">
              Governing Law. These Terms will be governed by and construed in
              accordance with the laws of the state of California, without
              regard to its conflict of laws principles.
            </p>
            <p className="mb-4">
              Entire Agreement. These Terms constitute the entire agreement
              between you and Dimp with respect to the Program and supersede all
              prior agreements and understandings, whether written or oral,
              relating to the Program.
            </p>
            <p className="mb-4">
              Contact Information. For questions or concerns about these Terms
              or your participation in the Program, please contact Dimp at
              [contact information].
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ApiLicense;
