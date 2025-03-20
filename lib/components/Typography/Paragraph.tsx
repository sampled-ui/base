import styles from "./Paragraph.module.scss";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  className,
  children,
  ...restProps
}) => {
  return (
    <p className={`${styles.paragraph} ${className}`} {...restProps}>
      {children}
    </p>
  );
};
