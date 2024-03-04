const layout = ({children} : {children : React.ReactNode }) => {
    return (
      <div className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center" >
        <body>
            {children}
        </body>
      </div>
    );
}
export default layout;