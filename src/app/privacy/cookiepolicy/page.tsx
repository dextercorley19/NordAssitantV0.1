import Footer from "@/app/ui/footer";
import Link from "next/link";

export default function CookiePolicy() {
  return (
    <>
      <div className="mx-auto mb-28 mt-36 flex max-w-4xl justify-center">
        <div className="rounded-lg bg-white px-8 py-6 shadow-md">
          {" "}
          <h1 className="mb-4 text-3xl font-bold">
            Cookie Policy for Nord Assistant
          </h1>
          <p className="mb-4">
            This is the Cookie Policy for Nord Assistant, accessible from
            http://www.nordassistant.com
          </p>
          <p className="mb-2 font-semibold">What Are Cookies</p>
          <p className="mb-4">
            As is common practice with almost all professional websites this
            site uses cookies, which are tiny files that are downloaded to your
            computer, to improve your experience. This page describes what
            information they gather, how we use it and why we sometimes need to
            store these cookies. We will also share how you can prevent these
            cookies from being stored however this may downgrade or 'break'
            certain elements of the sites functionality.
          </p>
          <p className="mb-2 font-semibold">How We Use Cookies</p>
          <p className="mb-4">
            We use cookies for a variety of reasons detailed below.
            Unfortunately in most cases there are no industry standard options
            for disabling cookies without completely disabling the functionality
            and features they add to this site. It is recommended that you leave
            on all cookies if you are not sure whether you need them or not in
            case they are used to provide a service that you use.
          </p>
          <p className="mb-2 font-semibold">Disabling Cookies</p>
          <p className="mb-4">
            You can prevent the setting of cookies by adjusting the settings on
            your browser (see your browser Help for how to do this). Be aware
            that disabling cookies will affect the functionality of this and
            many other websites that you visit. Disabling cookies will usually
            result in also disabling certain functionality and features of the
            this site. Therefore it is recommended that you do not disable
            cookies. This Cookies Policy was created with the help of the{" "}
            <a
              href="https://www.cookiepolicygenerator.com/cookie-policy-generator/"
              className="text-blue-500"
            >
              Cookies Policy Generator
            </a>
            .
          </p>
          <p className="mb-2 font-semibold">The Cookies We Set</p>
          <ul className="mb-4 list-inside list-disc">
            <li>
              <p>Account related cookies</p>
              <p>
                If you create an account with us then we will use cookies for
                the management of the signup process and general administration.
                These cookies will usually be deleted when you log out however
                in some cases they may remain afterwards to remember your site
                preferences when logged out.
              </p>
            </li>
          </ul>
          <p className="mb-2 font-semibold">Third Party Cookies</p>
          <ul className="mb-4 list-inside list-disc">
            <li>
              <p>
                This site uses Google Analytics which is one of the most
                widespread and trusted analytics solution on the web for helping
                us to understand how you use the site and ways that we can
                improve your experience. These cookies may track things such as
                how long you spend on the site and the pages that you visit so
                we can continue to produce engaging content.
              </p>
              <p>
                For more information on Google Analytics cookies, see the
                official Google Analytics page.
              </p>
            </li>
          </ul>
          <p className="mb-2 font-semibold">More Information</p>
          <p className="mb-4">
            Hopefully that has clarified things for you and as was previously
            mentioned if there is something that you aren't sure whether you
            need or not it's usually safer to leave cookies enabled in case it
            does interact with one of the features you use on our site.
          </p>
          <p className="mb-4">
            For more general information on cookies, please read{" "}
            <a
              href="https://www.cookiepolicygenerator.com/sample-cookies-policy/"
              className="text-blue-500"
            >
              the Cookies Policy article
            </a>
            .
          </p>
          <p className="mb-4">
            However if you are still looking for more information then you can
            contact us through one of our preferred contact methods:
          </p>
          <ul className="mb-4 list-inside list-disc">
            <li>
              By visiting this link:{" "}
              <a
                href="http://www.nordassistant.com/contact"
                className="text-blue-500"
              >
                http://www.nordassistant.com/contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
