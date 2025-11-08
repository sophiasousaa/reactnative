import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  AccessibilityProps,
} from 'react-native';


// Componente para exibir o nome e função
const Header = ({ name, role }: { name: string; role: string }) => (
  <View accessible accessibilityRole="header" style={styles.header}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.role}>{role}</Text>
  </View>
);

// Componente para contato
const Contact = ({
  location,
  phone,
  email,
}: {
  location: string;
  phone: string;
  email: string;
}) => (
  <View style={styles.contact} accessible accessibilityRole="text">
    <Text>📍 {location}</Text>
    <Text>📱 {phone}</Text>
    <Text>📧 {email}</Text>
  </View>
);

// Componente comum para seções do currículo
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

// Componente para cartões de experiência
const ExpCard = ({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description: string;
}) => (
  <View style={styles.expCard} accessible accessibilityRole="summary">
    <Text style={styles.expTitle}>{title}</Text>
    <Text style={styles.expSubtitle}>{subtitle}</Text>
    <Text style={styles.text}>{description}</Text>
  </View>
);

export default function App() {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      <Header name="Sophia Santos" role="UI/UX Designer" />
      <Contact
        location="Recife, PE"
        phone="+55 81 99535-3737"
        email="sophissan08@gmail.com"
      />

      <Section title="💬 Resumo Profissional">
        <Text style={styles.text}>
          UI/UX Designer com experiência em prototipagem no Figma, design
          centrado no usuário e colaboração em times ágeis. Atuei em projetos
          de inovação no Porto Digital e startups incubadas, criando interfaces
          intuitivas e participando de testes de usabilidade. Busco contribuir
          com soluções digitais criativas e escaláveis, unindo visão de produto
          e experiência do usuário.
        </Text>
      </Section>

      <Section title="🎨 Experiência em Design">
        <ExpCard
          title="Startup da Incubadora Ideias, Senac PE"
          subtitle="Voluntária UX/UI (Nov 2024 - Fev 2025)"
          description={`• Continuidade no protótipo do app da empresa, aplicando design centrado no usuário.\n• Participação na Arena de Negócios durante o Recn Play, com vivência no ecossistema de inovação.`}
        />
        <ExpCard
          title="Residência do Porto Digital"
          subtitle="UI/UX Designer (Ago 2024 - Nov 2026)"
          description={`• Desenvolvimento de soluções digitais em equipes multidisciplinares.\n• Design de interface, identidade visual e prototipação no Figma para projetos reais.`}
        />
      </Section>

      <Section title="💼 Outras Experiências">
        <ExpCard
          title="Loomi, Recife"
          subtitle="QA Intern (Mai 2025 - Atual)"
          description={`• Identificação e reporte de bugs, criação de cenários de teste e documentação técnica.\n• Colaboração com times de produto para melhoria contínua da qualidade.`}
        />
      </Section>

      <Section title="🎓 Formação">
        <Text style={styles.text}>
          • Análise e Desenvolvimento de Sistemas — Faculdade Senac PE (2024 -
          2026){'\n'}• Administração — UFPE (2024 - 2028){'\n'}• ETE Cícero Dias
          (NAVE) — Técnico em Multimídia (2021 - 2023)
        </Text>
      </Section>

      <Section title="🧩 Competências">
        <Text style={styles.text}>
          • UI/UX Design (Figma, wireframes, fluxos de usuário, design system){'\n'}
          • Testes de Usabilidade e Pesquisa com Usuários{'\n'}• Metodologias Ágeis
          (Scrum, Kanban){'\n'}• HTML / CSS (noções){'\n'}• Análise de Requisitos e QA
        </Text>
      </Section>

      <Section title="🌎 Idiomas">
        <Text style={styles.text}>Inglês Intermediário</Text>
      </Section>

      <View style={{ height: 50 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#faf7ff',
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  header: {
    marginTop: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  name: {
    fontSize: 28,
    fontWeight: '800',
    color: '#4b007d',
  },
  role: {
    fontSize: 16,
    color: '#7b4bbd',
  },
  contact: {
    alignItems: 'center',
    marginBottom: 20,
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#8a2be2',
    marginBottom: 8,
    borderBottomColor: '#d9b3ff',
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    color: '#333',
    textAlign: 'justify',
  },
  expCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    marginBottom: 10,
    borderLeftColor: '#b57aff',
    borderLeftWidth: 4,
  },
  expTitle: {
    fontWeight: '600',
    fontSize: 15,
    color: '#4b007d',
    marginBottom: 2,
  },
  expSubtitle: {
    fontSize: 13,
    color: '#555',
    marginBottom: 6,
  },
});
