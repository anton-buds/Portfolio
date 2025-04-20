/** MAGIC PORTFOLIO - Test Update */
import { Analytics } from "@vercel/analytics/react"
import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp, IframeContainer } from "@/components";
import { Posts } from "@/components/blog/Posts";
import GradientText from '@/components/gradientText';

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Analytics />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Column fillWidth paddingY="m" gap="l">
        <Column maxWidth="l">
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="m">
            <Heading wrap="balance" variant="display-strong-xl" onBackground="accent-medium" >
              <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              >
                HI! I'M ANTON
              </GradientText>
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-strong" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} horizontal="start">
            <Button
              id="about"
              data-border="rounded"
              href="/about"
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="16" vertical="center">
                {about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.1em" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}
      <Projects range={[2]} />

      {/* Project Demo Section */}
      <Column fillWidth paddingY="m" gap="m">
        <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="m">
          <Heading wrap="balance" variant="display-strong-l" onBackground="accent-medium">
            PROJECT DEMO
          </Heading>
        </RevealFx>
        <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="m">
          <Text wrap="balance" onBackground="neutral-medium" variant="heading-default-xl">
            Interactive showcase of my work
          </Text>
        </RevealFx>
        <RevealFx translateY="12" delay={0.4} fillWidth>
          <IframeContainer
            src="https://barber-kartell.vercel.app/"
            title="BARBER KARTELL WEBSITE"
            description="This is a live demo of one of my projects. You can interact with it directly in this container."
            height="600px"
          />
        </RevealFx>
          <RevealFx translateY="12" delay={0.4} horizontal="start">
            <Button
              id="website"
              data-border="rounded"
              href="https://barber-kartell.vercel.app/"
              variant="tertiary"
              size="m"
              arrowIcon
            >
              <Flex gap="16" vertical="center">
                Go to Site
              </Flex>
            </Button>
          </RevealFx>
      </Column>

      {newsletter.display && <Mailchimp newsletter={newsletter} />}
      {/* Contact Section */}
      <Column fillWidth paddingY="m" gap="m">
        <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="m">
          <Heading wrap="balance" variant="display-strong-l" onBackground="accent-medium">
            <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            >
            Get in Touch
            </GradientText>
            
          </Heading>
        </RevealFx>
        <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="m">
          <Text wrap="balance" onBackground="neutral-medium" variant="heading-default-xl">
            Let's connect and discuss your next project
          </Text>
        </RevealFx>
        <RevealFx translateY="12" delay={0.4} fillWidth horizontal="center">
          <Flex gap="m" wrap>
            <Button
              href="mailto:antonbuds7@outlook.com"
              variant="secondary"
              size="m"
              arrowIcon
            >
              Email Me
            </Button>
          </Flex>
        </RevealFx>
      </Column>
    </Column>
  );
}
