import { ActivityCard } from "@/components/dashboard/ActivityCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Dashboard de Atividades
          </h1>
          <p className="text-muted-foreground">
            Acompanhe o progresso das suas atividades com uma visão clara e intuitiva
          </p>
        </div>

        {/* Grid de cards demonstrando diferentes variações */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card original melhorado */}
          <ActivityCard
            totalHours={728.04}
            totalActivities={276}
            period="Apontamento do mês"
            trend={12}
          />

          {/* Variações para demonstrar flexibilidade */}
          <ActivityCard
            totalHours={156.30}
            totalActivities={42}
            period="Última semana"
            trend={-5}
          />

          <ActivityCard
            totalHours={1250.75}
            totalActivities={428}
            period="Trimestre atual"
            trend={0}
          />

          <ActivityCard
            totalHours={89.15}
            totalActivities={28}
            period="Projetos em andamento"
            trend={25}
          />

          <ActivityCard
            totalHours={342.60}
            totalActivities={94}
            period="Atividades concluídas"
            trend={8}
          />

          <ActivityCard
            totalHours={45.30}
            totalActivities={12}
            period="Pendências"
            trend={-15}
          />
        </div>

        {/* Seção adicional para demonstrar o card em contexto */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Card Destacado
          </h2>
          <div className="max-w-md">
            <ActivityCard
              totalHours={728.04}
              totalActivities={276}
              period="Apontamento do mês"
              trend={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
