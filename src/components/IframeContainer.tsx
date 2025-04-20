"use client";

import React from "react";
import { Flex, Text } from "@/once-ui/components";

interface IframeContainerProps {
  src: string;
  title: string;
  description?: string;
  height?: string;
  width?: string;
  allowFullScreen?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const IframeContainer: React.FC<IframeContainerProps> = ({
  src,
  title,
  description,
  height = "500px",
  width = "100%",
  allowFullScreen = true,
  className,
  style,
}) => {
  return (
    <Flex
      direction="column"
      fillWidth
      gap="m"
      className={className}
      style={{
        ...style,
        position: "relative",
      }}
    >
      <Flex horizontal="space-between" vertical="center" gap="s">
        <Text variant="heading-strong-s">{title}</Text>
      </Flex>
      {description && (
        <Text variant="body-default-s" onBackground="neutral-medium">
          {description}
        </Text>
      )}
      <Flex
        fillWidth
        radius="l"
        overflow="hidden"
        border="neutral-medium"
        style={{
          height: height,
          width: width,
          position: "relative",
        }}
      >
        <iframe
          src={src}
          title={title}
          width="100%"
          height="100%"
          style={{
            border: "none",
          }}
          allowFullScreen={allowFullScreen}
          loading="lazy"
        />
      </Flex>
    </Flex>
  );
};
