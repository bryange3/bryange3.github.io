"use client";

import { Copy, Check } from "lucide-react";
import { useState, MouseEvent, useEffect, TouchEvent, useRef, useCallback } from "react";
import styles from "./EmailCopy.module.css";

export default function EmailCopy() {
  const [copied, setCopied] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const email = "bryange3@gmail.com";

  useEffect(() => {
    // Detect if device is touch-enabled
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches
      );
    };
    checkTouchDevice();
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!isTouchDevice) {
      setMousePosition({ x: e.clientX, y: e.clientY });
      // Update tooltip position directly for immediate response
      if (tooltipRef.current) {
        tooltipRef.current.style.left = `${e.clientX + 10}px`;
        tooltipRef.current.style.top = `${e.clientY + 10}px`;
      }
    }
  };

  const handleTouchStart = (e: TouchEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      // Position tooltip centered above the button
      setMousePosition({
        x: rect.left + rect.width / 2,
        y: rect.top - 10,
      });
    }
  };

  const handleGlobalMouseMove = useCallback((e: globalThis.MouseEvent) => {
    if (copied && !isTouchDevice) {
      setMousePosition({ x: e.clientX, y: e.clientY });
      // Update tooltip position directly for immediate response
      if (tooltipRef.current) {
        tooltipRef.current.style.left = `${e.clientX + 10}px`;
        tooltipRef.current.style.top = `${e.clientY + 10}px`;
      }
    }
  }, [copied, isTouchDevice]);

  useEffect(() => {
    if (copied && !isTouchDevice) {
      window.addEventListener("mousemove", handleGlobalMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleGlobalMouseMove);
      };
    }
  }, [copied, isTouchDevice, handleGlobalMouseMove]);

  const handleCopy = async () => {
    try {
      // Use Clipboard API if available, otherwise fallback to execCommand
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for browsers/devices that don't support Clipboard API
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleCopy}
        onMouseEnter={() => !isTouchDevice && setIsHovering(true)}
        onMouseLeave={() => !isTouchDevice && setIsHovering(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        className={styles.emailContainer}
        aria-label="Copy email address"
      >
        <span className={styles.emailText}>Email</span>
        <Copy size={14} className={styles.copyIcon} />
      </button>
      {((isHovering && !isTouchDevice) || copied) && (
        <div
          ref={tooltipRef}
          className={styles.tooltip}
          style={{
            left: isTouchDevice && copied
              ? `${mousePosition.x}px`
              : `${mousePosition.x + 10}px`,
            top: isTouchDevice && copied
              ? `${mousePosition.y}px`
              : `${mousePosition.y + 10}px`,
            transform: isTouchDevice && copied
              ? 'translate(-50%, -100%)'
              : 'none',
          }}
        >
          {copied ? (
            <>
              Copied! <Check size={12} className={styles.checkIcon} />
            </>
          ) : (
            "Copy"
          )}
        </div>
      )}
    </>
  );
}

