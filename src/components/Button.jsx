const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon: Icon,
  iconSize = 20,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-normal transition-all duration-200 rounded-lg active:scale-95 disabled:opacity-50 disabled:pointer-events-none gap-2 cursor-pointer outline-none';

  const variants = {
    accent:
      'bg-accent text-white hover:bg-accent-dark shadow-md shadow-accent/20',
    secondary:
      'bg-white border border-gray-200 text-text-main hover:bg-gray-100 shadow-sm',
    outlineGray:
      'bg-transparent border-1 border-gray-200 text-sm text-gray-600 hover:bg-gray-50',
    outlineAccent:
      'bg-transparent border-1 border-accent text-accent hover:bg-accent/20',
    violet:
      'bg-violetLight text-white hover:bg-violetLight/85 shadow-md shadow-accent/20',
    // ghost: "text-accent hover:bg-accent/10"
  };

  const sizes = {
    sm: 'h-8 px-3 text-sm font-medium',
    md: 'h-9 px-3 text-sm font-medium',
    lg: 'h-10 px-5 text-sm font-medium',
  };

  const widthStyle = fullWidth ? 'w-full' : 'w-auto';

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {/* Якщо іконка передана, рендеримо її перед текстом */}
      {Icon && <Icon size={iconSize} strokeWidth={2} />}

      {children}
    </button>
  );
};

export default Button;
