import useTheme from "../../Hooks/Home/useTheme";

const SectionLayouts = (props) => {
  const { styleSection, styleComponent, children } = props;
  const { handleThemeBg } = useTheme();
  return (
    <section className={` ${handleThemeBg()} ${styleSection} py-5`}>
      <div className={`container max-w-5xl ${styleComponent}`}>{children}</div>
    </section>
  );
};

export default SectionLayouts;
