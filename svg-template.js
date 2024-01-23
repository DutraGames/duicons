const Template = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl }
) => {
  return tpl`${imports}
${interfaces}
interface IconProps {
  size?: number | string;
  color?: string;
}

function ${componentName}({size = 32,color = "#000000",}:IconProps, ${props}) {
  return ${jsx};
}

${exports}
  `;
};

module.exports = Template;
